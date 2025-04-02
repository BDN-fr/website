export const metadata = {
  title: 'BDN_fr\'s Amazing Website',
  description: 'jk this website is just shitty',
};

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MouseFollowingGradient } from '@/components/mouseFollowingGradient'

import '@/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header/> */}
        <MouseFollowingGradient/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
