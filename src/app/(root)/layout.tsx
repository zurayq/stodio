import { ReactNode } from "react";
import { baseMetadata, studioViewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = baseMetadata;
export const viewport = studioViewport;

export default function RedirectLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
