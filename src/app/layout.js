import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/ThemeContext";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.yonibns.com"),
  keywords: ["yoni bensoussan", "bensoussan yoni", "yonibns", "bns", "full stack developer", "developpeur full stack", "react", "nextjs", "react developer", "developpeur react"],
  title: "Yoni Bensoussan - Portfolio",
  description: "Full stack developer",
  openGraph: {
    images: "/src/app/opengraph-img.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.png" />
      </head>
      <ThemeProvider>
        <Nav />
        {children}
        <Footer />
      </ThemeProvider>
    </html>
  );
}