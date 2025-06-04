import Link from 'next/link'

export function Header() {
    return (
        <header className="fully-centered">
            <Link href="/">Homepage</Link>
            <Link href="/socials">Socials</Link>
            <Link href="/projects">Projects</Link>
        </header>
    )
};