import type { Metadata } from "next";
import "@scss/soaricons.scss";
import "@scss/main.scss";

export const metadata: Metadata = {
  title: "SOAR Inc.",
  description: "SOAR Inc. - Simple Frontend Exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
