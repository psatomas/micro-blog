import { Post as PostType, User } from "@prisma/client";
import Link from "next/link";
import styles from './Post.module.css'

interface Props {
    post: PostType & {
        author: User | null
    };
}

export default function Post({post}: Props) {
    const authorName = post.author ? post.author.name : "Anonymous"
 return (
    <Link href={`/post/${post.id}`} className={styles.post}>
        <h2>{post.title}</h2>
        <small>{authorName}</small>
    </Link>
);
}