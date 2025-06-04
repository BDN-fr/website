import Link from "next/link";

export function Footer() {
    return (
        <footer className="fully-centered">
            <div className="fully-centered">
                <div style={{padding: '1.5em'}}>
                    <img src="/img/pfp.png" alt="MY PDP OMMGG !" className="avatar"/>
                </div>
                <h2 style={{margin:0}}>Made by BDN_fr</h2>
            </div>
            <div className="h-centered" style={{flexGrow: 1}}>
                <p>This website is open source, <Link href="https://github.com/BDN-fr/website">here is the link</Link></p>
            </div>
        </footer>
    );
};
