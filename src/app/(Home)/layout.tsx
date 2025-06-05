import Header from "@/components/Navbar";
import "../globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Image-3-diffy | Turn Your 2D Images into Stunning 3D Models —
          Instantly with Image-3-diffy!
        </title>
        <meta
          name="description"
          content="Image-3-diffy is an AI-powered tool that converts 2D images into realistic 3D models in GLB format. Easily upload, preview, and download 3D objects — perfect for developers, designers, and 3D enthusiasts."
        />
      </head>
      <body className={`antialiased`}>
        <Header />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
