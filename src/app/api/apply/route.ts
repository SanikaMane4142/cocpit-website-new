import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
        return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const formData = await req.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const role = formData.get('role') as string;
        const resumeFile = formData.get('resume') as File | null;

        if (!name || !email) {
            return NextResponse.json({ message: "Name and Email are required" }, { status: 400 });
        }

        let resumeFileName = null;

        if (resumeFile && resumeFile.size > 0) {
            const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
            // Sanitize filename to avoid weird characters
            const sanitizedName = resumeFile.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
            const fileName = `${Date.now()}-${sanitizedName}`;

            const { error: uploadError } = await supabase.storage
                .from("resumes")
                .upload(fileName, fileBuffer, {
                    contentType: resumeFile.type,
                });

            if (uploadError) {
                console.error("Supabase upload error:", uploadError);
            } else {
                resumeFileName = fileName;
            }
        }

        const { error: dbError } = await supabase.from("applications").insert([
            {
                name,
                role: role || "General Application",
                email,
                message: message || "",
                resume: resumeFileName,
            },
        ]);

        if (dbError) throw dbError;

        await transporter.sendMail({
            from: `"Cocpit Careers" <${process.env.EMAIL_USER}>`,
            to: process.env.HR_EMAIL,
            subject: `New Job Application - ${role || "General Application"}`,
            html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role || "General Application"}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
            attachments: resumeFile && resumeFile.size > 0
                ? [
                    {
                        filename: resumeFile.name,
                        content: Buffer.from(await resumeFile.arrayBuffer()),
                    },
                ]
                : [],
        });

        console.log("Application submitted:", name);

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully",
        }, { status: 200 });
    } catch (error: any) {
        console.error("Application Error:", error);
        return NextResponse.json({ message: error.message || String(error) }, { status: 500 });
    }
}
