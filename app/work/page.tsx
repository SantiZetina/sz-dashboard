import RootLayout from "../layout";

export default function WorkPage() {
    return (
        <RootLayout>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center my-8">
                    My Work
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sample project cards */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="border rounded-lg p-4 shadow hover:shadow-lg transition-all">
                            <h2 className="text-xl font-semibold">Project {item}</h2>
                            <p className="text-gray-600">Description of project {item}...</p>
                            {/* Add more details like technologies used, link to project, etc. */}
                        </div>
                    ))}
                </div>
            </div>
        </RootLayout>
    );
}

