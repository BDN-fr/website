import './page.css'

import { headers } from 'next/headers';

async function WelcomeTitle() {
    var host = (await headers()).get('host')
    return (
        <div className='h-centered'>
            <h1 id="welcome" className="title">Welcome to</h1>
            <a href="/" id="host" className="title">{host}</a>
            <p>Testing if this commit is automaticly built</p>
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <WelcomeTitle/>
        </main>
    );
}
