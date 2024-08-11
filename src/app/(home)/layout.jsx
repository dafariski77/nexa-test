import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page",
  description: "Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
