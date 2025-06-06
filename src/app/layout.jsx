export const metadata = {
  title: 'BDN_fr\'s Amazing Website',
  description: 'Not really "amazing"',
};

import Header from '@/components/header'
import Footer from '@/components/footer'
import ConsoleEaterEgg from '@/components/consoleEasterEgg'

import '@/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <ConsoleEaterEgg/>
      </body>
    </html>
  );
}
