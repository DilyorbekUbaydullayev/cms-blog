import type { Metadata } from "next";
import {Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";

const creteRound = Crete_Round({
  weight:['400'],
  variable: "--font-creteRound",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: 'Sammi dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
}

 function RootLayout({children}:ChildProps) {
  return (
    <html lang="en">
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}  export default RootLayout