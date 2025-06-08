export const metadata = {
  title: 'BDN_fr\'s Amazing Website',
  description: 'Not really "amazing"',
};

import Header from '@/components/header'
import Footer from '@/components/footer'
import ConsoleEaterEgg from '@/components/consoleEasterEgg'

import '@/global.css'
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src='https://analytics.bdn-fr.xyz/script.js' data-website-id="11f9c6a0-b6cd-4a26-9edf-1c1518b465a0"/>
        <Header/>
        {children}
        <Footer/>
        <ConsoleEaterEgg/>
      </body>
    </html>
  );
}
