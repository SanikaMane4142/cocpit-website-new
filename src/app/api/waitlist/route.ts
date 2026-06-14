import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
        return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const { error } = await supabase
            .from("waitlist")
            .insert([{ email }]);

        if (error) {
            if (error.code === "23505") {
                return NextResponse.json({ message: "You are already on the waitlist" }, { status: 400 });
            }
            throw error;
        }

        console.log("New waitlist signup:", email);

        return NextResponse.json({
            message: "Successfully joined the waitlist 🚀",
        }, { status: 200 });
    } catch (error: any) {
        console.error("Waitlist error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
