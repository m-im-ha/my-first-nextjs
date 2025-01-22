'use client';

export default function Error({ error, reset }) {
    return (
        <main className="p-8 text-center">
            <h2 className="text-2xl text-red-600 mb-4">
                Failed to load blog post
            </h2>
            <button
                onClick={() => reset()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Try again
            </button>
        </main>
    );
}