

import "./globals.css";
import { jakarta } from "@/libs/fonts";


export const metadata = {
  title: "SI Transkrip",
  description: "Sistem Informasi Transkrip SMK PU Negeri Bandung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
