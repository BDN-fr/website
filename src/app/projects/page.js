function Project({name, image, children}) {
    return (
        <div className="bordered zoom-on-hover" style={{width:'100%', marginTop:'2em'}}>
            <div className="v-centered">
                {image && image != '' && <img src={image} className="icon" style={{marginRight:'1em'}}/>}
                <h2>{name}</h2>
            </div>
            {children}
        </div>
    )
}

export default function Page() {
    return (
        <main>
            <div className="content" style={{width:'80%', paddingTop:'1em'}}>
                <Project
                name='Ellevia'
                image='/img/ellevia.png'
                >
                    <p>
                        Ellevia is a website I started making to replace the shitty new <a href="https://ilevia.fr">Ilevia</a> mobile app 
                        (while working on PC obviously).
                    </p>

                    <p>
                        For the frontend, i use <a href="https://nextjs.org">Next.js</a>, for the backend i simply use 
                        the <a href="https://navitia.io">Navitia API</a> (which is used by Ilevia) with the Ilevia's API key 
                        (simply grabbed on thier website from the requests).
                    </p>

                    <p style={{border:'solid #ffa202 1px', backgroundColor:'#ffa20230', padding:'0.4em', borderRadius:'8px', width:'fit-content'}}>
                        This project is in an really early WIP state, absolutely not usable for now.<br/>
                        If you still want to check it you can visit the <a href="https://ellevia.bdn-fr.xyz">website</a> or 
                        the <a href="https://github.com/BDN-fr/ellevia">github</a>
                    </p>
                </Project>

                <Project
                name='Website'
                image='/img/pfp-transparent.png'
                >
                    <p>Literally the website you're on, made with <a href="https://nextjs.org">Next.js</a>.</p>
                    <p>You can access the code on the <a href="https://github.com/BDN-fr/website">github</a>.</p>
                </Project>

                <Project
                name='Longbeach RP'
                image = ''
                >
                    <p>Longbeach RP is a french GTA V FiveM RP server. I worked on it as a developper and staff from march 2024 to april 2025.</p>
                </Project>
            </div>
        </main>
    )
}