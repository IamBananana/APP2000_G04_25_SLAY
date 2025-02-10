import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import AppNavbar from "@/src/components/AppNavbar";
import Footer from "@/src/components/Footer";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
    title: "TeeTime | DiscGolf",
    description: "A Next.js application for Disc Golf",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                {/*  */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/src/assets/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/src/assets/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/src/assets/favicon-16x16.png"
                />
                <link rel="manifest" href="/src/assets/site.webmanifest" />

                {/* Bootstrap-icons */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                />

                {/* Bootstrap */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
            </Head>
            <body id="b">
                <AppNavbar />
                <main>{children}</main>
                <Footer />

                {/* Bootstrap-js */}
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                    defer
                ></script>
            </body>
        </html>
    );
}
