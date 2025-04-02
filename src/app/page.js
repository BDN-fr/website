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

function QuestionDiv({ question, children }) {
    return (
        <div className='bordered question'>
            <h2 style={{marginTop: 0}}>{question}</h2>
            {children}
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <WelcomeTitle/>
            <div className='content' style={{width: '80%'}}>
                <img src='/img/pfp.png' className='avatar'/>
                <h1>About me</h1>
                {/* TODO: Change this shitty look */}
                <QuestionDiv question='Who am i ?'>
                    <p>I am BDN_fr, a french 16yo girl who like coding things.</p>
                </QuestionDiv>
                <QuestionDiv question='long test...'>
                    <p>This is a looong response, only to check how the css will react to that...
                        React like the framework used to make this website, it's Next.js but... Yeah... It's long enough</p>
                </QuestionDiv>
            </div>
        </main>
    );
}
