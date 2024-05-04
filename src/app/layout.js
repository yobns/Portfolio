import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/ThemeContext";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.yonibns.com"),
  keywords: ["yoni","bensoussan", "yoni bensoussan", "bns", "yonibns", "full stack developer", "developpeur full stack", "react", "nextjs", "react developer", "developpeur react"],
  title: "Yoni Bensoussan - Portfolio",
  description: "Full stack developer",
  openGraph: {
    images: "./opengraph-img.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.png" class="rounded-full"/>
      <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer/>
        </ThemeProvider>
    </html>
  );
}
