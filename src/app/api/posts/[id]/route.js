export async function GET({ params }) {
    try {
        // In a real app, you'd fetch this from a database
        const posts = [
            { 
                id: 1, 
                title: "First Post", 
                content: "This is a longer content for my first post. It includes more details and information that would be interesting to readers." 
            },
            { 
                id: 2, 
                title: "Second Post", 
                content: "Content for the second post goes here. This would typically be much longer in a real blog." 
            },
            { 
                id: 3, 
                title: "Third Post", 
                content: "This is the content for the third post. It contains detailed information about the topic." 
            }
        ];

        const post = posts.find(p => p.id === parseInt(params.id));
        
        if (!post) {
            return Response.json(
                { error: "Post not found" },
                { status: 404 }
            );
        }

        return Response.json(post);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}