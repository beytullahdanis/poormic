import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'poormic',
  description: 'a voice chat web app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
