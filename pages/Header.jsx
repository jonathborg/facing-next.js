import { Link } from '../routes';

export default function Header() {
    return (
        <div id="header">
            <Link href="/about">
                <a>About Page</a>
            </Link>
        </div>
    )
}
