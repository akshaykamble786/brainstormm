import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/attributes.css";
import { Providers } from "./Providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brainstorm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
