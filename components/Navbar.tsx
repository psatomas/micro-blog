"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css"

export default function Navbar() {
    const pathname = usePathname();
    
    function isActive(linkPathname: string) {
        return pathname === linkPathname
    }

    return (
        <nav>
            <div className={styles.left}>
                <Link href="/" data-active={isActive("/")}>Microblog</Link>
                <Link href="/drafts" data-active={isActive("/drafts")}>Drafts</Link>
                <Link href="/about" data-active={isActive("/about")}>About</Link>
            </div>
            <div className={styles.right}>
                <Link href="/signup" data-active={isActive("/signup")}>Sign Up</Link>
                <Link href="/create" data-active={isActive("/create")}>+ Create Post</Link>
            </div>
        </nav>
    )
}