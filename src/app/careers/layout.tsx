import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Cocpit - Join the Team',
  description: 'Help build the intelligent infrastructure powering Cocpit. Explore open roles and internships.',
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
