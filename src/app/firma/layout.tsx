import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns',
};

export default function FirmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
