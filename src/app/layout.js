import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/ThemeContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yoni Bensoussan - Portfolio",
  description: "Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"/>
      </head>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer/>
        </ThemeProvider>
    </html>
  );
}
