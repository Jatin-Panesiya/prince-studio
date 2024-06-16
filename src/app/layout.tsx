import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Studio",
  description:
    "Prince Studio is a premier photography and videography studio offering a range of professional services including weddings, portraits, corporate events, and commercial projects. Our team of skilled photographers and videographers are dedicated to capturing your most cherished moments with creativity and precision, ensuring stunning results that you will treasure forever. Whether you need a timeless wedding album, a captivating portrait, or dynamic footage for your business, Prince Studio delivers exceptional quality and personalized service to meet your unique needs.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
