import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FileTree from "@/components/FileTree";
import TabBar from "@/components/TabBar";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";
import MobileNav from "@/components/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramendra Kumar Ravi | Frontend Engineer",
  description:
    "Portfolio of Ramendra Kumar Ravi - Frontend Engineer specializing in React.js, Next.js, TypeScript, and Monorepo architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="h-full flex flex-col overflow-hidden">
        <CommandPalette />

        {/* Mobile nav */}
        <MobileNav />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - desktop only */}
          <FileTree />

          {/* Main area */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Tab bar - desktop only */}
            <div className="hidden md:block">
              <TabBar />
            </div>

            {/* Editor content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-8">
              {children}
            </main>
          </div>
        </div>

        {/* Status bar */}
        <StatusBar />
      </body>
    </html>
  );
}
