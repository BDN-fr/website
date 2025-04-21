import './page.css'

import { Socials } from '@/components/socials'

export default function Page() {
    return (
        <main>
            <h2><a href='/'>Return to the homepage</a></h2>
            <div className='h-centered' style={{width:'80%'}}>
                <Socials/>
            </div>
        </main>
    )
}