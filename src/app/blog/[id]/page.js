async function getPost(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      next: { revalidate: 0 },
    });

    if(!res.ok){
        throw new Error("Failed to fetch error.");
    }

    return res.json();
  } catch (error) {
    console.error("Error : ",error);
    throw new Error("Failed to fetch post");
  }
}

export default async function BlogPost({ params }) {
    const post = await getPost(params.id);
    
    return (
        <main className="p-8 max-w-4xl mx-auto">
            <article className="prose lg:prose-xl">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="mt-8">
                    <p>{post.content}</p>
                </div>
            </article>
        </main>
    );
}
