import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "./(root)/_components/navbar";
import Footer from "./(root)/_components/footer";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader'
const creteRound = Crete_Round({
  weight: ["400"],
  variable: "--font-creteRound",
  subsets: ["latin"],
  display:'swap'
});

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codely-woad.vercel.app'),
  title: 'Codely Programming Articles',
  description:
    'Programming news, tips, and tutorials on React Suspense, scalable APIs, full-stack development, and in-browser AI chatbots. Find guides and best practices to level up your code!',
 authors:[
  { name: 'Ubaydullyev Dilyorbek',    url: 'https://codely-woad.vercel.app'     },
],
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    'codely',
    'programming',
    'React Suspense',
    'Node.js',
    'Express',
    'Next.js',
    'full-stack',
    'TensorFlow.js',
    'AI chatbots',
    'front-end',
    'back-end',
    'tutorials',
    'Uzbekistan'
  ],
  openGraph: {
    title: 'Codely Programming Articles',
    description:
      'Programming news, tips, and tutorials on React Suspense, scalable APIs, full-stack development, and in-browser AI chatbots. Find guides and best practices to level up your code!',
    type: 'website',
    url: 'https://codely-woad.vercel.app',
    locale: 'en_EN',
    images: [
      'https://codely-woad.vercel.app/_next/image?url=https%3A%2F%2Fus-west-2.graphassets.com%2Fcm9w695ob08zv07mx70ed4trr%2Fcma4v3ya9b19t07n37fcf8aq1&w=2048&q=75'
    ],
    siteName: 'Codely',
    countryName: 'Uzbekistan',
   
  },
}


function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="container">{children}</div>
          <NextTopLoader showSpinner={false}/>
          <Toaster position="top-center"/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout;
