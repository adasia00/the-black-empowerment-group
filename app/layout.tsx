import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "The Black Empowerment Group | Purpose. Progress. Possibility.",
  description:
    "The Black Empowerment Group brings people, expertise, and opportunity together to strengthen enterprises and communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
