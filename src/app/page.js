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
        <div className='bordered question zoom-on-hover'>
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
                <QuestionDiv question='Who am i ?'>
                    <p>I am BDN, a french 16yo girl who like coding things. I also like playing video games especially indie ones.</p>
                </QuestionDiv>
                <QuestionDiv question="My socials">
                    <p>See the <a href='/socials'>dedicated page</a></p>
                </QuestionDiv>
                <QuestionDiv question="My projects">
                    <p>See the <a href='/projects'>dedicated page</a></p>
                </QuestionDiv>
                <QuestionDiv>
                    <p>More content will be added later, if I have any ideas of what to add</p>
                </QuestionDiv>
            </div>
        </main>
    );
}
