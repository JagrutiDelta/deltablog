import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./ConditionalLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Software Development Company in Ahmedabad | Delta Infosoft Pvt Ltd",
  description:
    "Delta Infosoft Pvt Ltd is a software development company in Ahmedabad offering ERP, CRM, Zoho CRM implementation and custom web and mobile app solutions for businesses.",
  keywords:
    "software development company in Ahmedabad, ERP software company in Ahmedabad, CRM software company in Ahmedabad, Zoho CRM implementation partner Ahmedabad, custom software development Ahmedabad, Delta Infosoft Pvt Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWG3K5P5WD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PWG3K5P5WD');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <Script id="tawk-chat" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/642966a331ebfa0fe7f6082b/1gt0rhs9a';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <ConditionalLayout>
            {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
// const Content = () => {
//   return (
//     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//         Scroll back up to reveal Navbar
//       </p>
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };
