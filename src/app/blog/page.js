import Link from 'next/link';

async function getPosts() {
    try {
        const res = await fetch("http://localhost:3000/api/posts", {
            next: { revalidate: 0 }
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            <div className="space-y-4">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <article key={post.id} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-semibold">{post.title}</h2>
                            <p className="mt-2 text-gray-600">{post.content.substring(0, 150)}...</p>
                            <Link 
                                href={`/blog/${post.id}`}
                                className="mt-4 inline-block text-blue-500 hover:text-blue-600"
                            >
                                Read more →
                            </Link>
                        </article>
                    ))
                ) : (
                    <p className="text-gray-500">No posts found.</p>
                )}
            </div>
        </main>
    );
}