// src/app/layout.tsx
import type { Metadata } from 'next';
import '../styles.css';  // ← Adjust path to your global CSS file
// If you have a global layout/header/footer component, import and wrap here

export const metadata: Metadata = {
  title: 'Nihilo Solutions — Enterprise AI Consulting',
  description: 'Secure, tenant-local RAG pipelines and agentic automation on Azure & AWS. Production-ready enterprise AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* If you have a shared Header/Navbar component, put it here */}
        {children}
        {/* Shared Footer if needed */}
      </body>
    </html>
  );
}