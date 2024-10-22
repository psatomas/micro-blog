import prisma from "@/lib/prisma";
import Post from "@/components/Post";
export default async function HomePage() {
  const posts = await prisma.post.findMany({
    where:{
        published: true,
    },
    include: {
        author: true,
    },
});

  return (
    <main>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  )
}
