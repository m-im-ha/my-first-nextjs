export async function GET() {
    try {
        // Simulating database data
        const posts = [
            { id: 1, title: "First Post", content: "This is my first post" },
            { id: 2, title: "Second Post", content: "This is my second post" },
            { id: 3, title: "Third Post", content: "This is my third post" }
        ];

        return Response.json(posts);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch posts" },
            { status: 500 }
        );
    }
}