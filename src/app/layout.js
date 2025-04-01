export const metadata = {
  title: 'BDN_fr\'s Amazing Website',
  description: 'jk this website is just shitty',
};

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import '@/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
