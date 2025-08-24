import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "~/components/Navbar";

export const metadata: Metadata = {
    title: "readit - ศูนย์รวมหนังสือดิจิทัลคุณภาพสูง",
    description: "ศูนย์รวมหนังสือดิจิทัลคุณภาพสูง อ่านฟรี ไม่จำกัด",
    icons: {
        icon: '/favicon.ico',
    },
};

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="th">
            <body className="antialiased">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
