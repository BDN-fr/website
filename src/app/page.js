import './page.css'

import { headers } from 'next/headers';

export default async function Home() {
    var host = (await headers()).get('host')
    return (
        <main>
            <h1 id="welcome" className="title">Welcome to</h1>
            <a href="/" id="host" className="title"><i>{host}</i></a>
            <p>Testing if this commit is automaticly built</p>
        </main>
    );
}
