async function getPosts(){
    const res = await fetch("http://localhost:3000/api/posts",{
        cache : "no-store" // This means get fresh data every request
    });

    if(!res.ok){
        throw new Error("Failed to fetch posts");
    }
    return res.json();
}

export default async function BlogPage(){
    const posts = await getPosts();

    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-6">Blog posts</h1>
            <div className="space-y-4">
                {posts.map(post => (
                    <article key={post.id} className="p-4 border rounded-lg">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="mt-2">{post.content}</p>
                    </article>
                ))}
            </div>
        </main>
    )
}