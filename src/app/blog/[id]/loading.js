export default function Loading() {
    return (
        <main className="p-8 max-w-4xl mx-auto">
            <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-8"></div>
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
            </div>
        </main>
    );
}