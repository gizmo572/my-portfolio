import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MobileProvider } from "@/components/mobile-context";
import { ThemeProvider } from "next-themes"
import { HotNavigationProvider } from "hot-nav";
import CustomCursor from "@/components/custom-cursor";
import { Background } from "@/components/background";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nicholas Cushman - Software Engineer",
  description: "Nicholas Cushman is a software engineer.",
  keywords: "Nicholas Cushman, Software Engineer, Full Stack Developer, React, Next.js, TypeScript, JavaScript, Node.js, Express, MongoDB, PostgreSQL, Python, Django, Flask, AWS, Docker, Kubernetes, Git, GitHub, Agile, Scrum, Leadership, Mentorship"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en suppressHydrationWarning">
      <body className="overflow-x-hidden">
        <div className="dark:bg-black/80">
          <div className={`${geistSans.variable} ${geistMono.variable } antialiased mx-auto min-h-screen max-w-screen-xl py-12 font-sans md:px-12 md:py-20 lg:py-0`}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <MobileProvider>
                <Background />
                <HotNavigationProvider addCustomStyles={false} defaultHotKeysOn={false} >
                <CustomCursor>
                  {children}
                </CustomCursor>
                </HotNavigationProvider>
              </MobileProvider>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
