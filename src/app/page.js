import './page.css'

import { headers } from 'next/headers';

async function WelcomeTitle() {
    var host = (await headers()).get('host')
    return (
        <div id='welcomeDiv' className='fully-centered'>
            <div className='h-centered'>
                <h1 id="welcome" className="title">Welcome to</h1>
                <a href="/" id="host" className="title">{host}</a>
                <p>aka BDN_fr's Amazing Website</p>
            </div>
            <img src='/icons/scroll.svg' className='icon' style={{position: 'absolute', bottom: 0}}></img>
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <WelcomeTitle/>
            <div className='fully-centered' style={{backgroundColor: 'red', width:'100%', height:'12em'}}>
                <p>coucou</p>
            </div>
        </main>
    );
}
