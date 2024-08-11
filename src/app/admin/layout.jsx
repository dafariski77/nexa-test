import { Toaster } from "@/components/ui/toaster";
import InitProvider from "@/utils/QueryProvider";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin",
  description: "Admin page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InitProvider>
          <main className="px-40 pt-12">{children}</main>
          <Toaster />
        </InitProvider>
      </body>
    </html>
  );
}
