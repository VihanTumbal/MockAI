import { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepWise - AI Mock Interviews",
  description: "Practice job interviews with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="mona_sans_26ddce03-module__qDlOMW__className antialiased pattern"
        suppressHydrationWarning
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
