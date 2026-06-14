import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cocpit - Our Vision and Team',
  description: 'Learn about the team behind Cocpit and our vision for the future of AI-powered networking.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
