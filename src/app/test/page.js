import './page.css'

function TestDiv({ className, color, children }) {
    return (
        <>
        <p>className : {className}</p>
        <div className={`${className} resizable test`} style={{borderColor: color}}>
            {children}
        </div>
        </>
    )
}

export default function Page() {
    return (
        <main>
            <TestDiv className='fully-centered' color='lime'>
                <p>content</p>
            </TestDiv>
            <TestDiv className='v-centered' color='magenta'>
                <p>content</p>
            </TestDiv>
            <TestDiv className='h-centered' color='orange'>
                <p>content</p>
            </TestDiv>
        </main>
    );
}