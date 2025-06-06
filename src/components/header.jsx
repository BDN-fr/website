import Link from 'next/link'

export default function Header() {
    return (
        <header className="fully-centered">
            <Link href="/">Homepage</Link>
            <Link href="/socials">Socials</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/status">Status</Link>
        </header>
    )
};