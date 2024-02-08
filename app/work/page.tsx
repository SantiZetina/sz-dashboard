export default function WorkPage() {
    return (
        <div className="container mx-auto px-4 pt-24"> {/* Added padding-top to push down the content */}
            <h1 className="text-3xl font-bold text-center my-8 text-primary dark:text-primary-foreground">
                My Work
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="group border border-secondary dark:border-secondary-foreground rounded-lg p-4 shadow transition-all hover:scale-105"
                    >
                        <div className="overflow-hidden">
                            {/* Replace this with project image */}
                            <div className="bg-secondary dark:bg-secondary-foreground h-48"></div>
                        </div>
                        <h2 className="text-xl font-semibold mt-3 text-primary dark:text-primary-foreground">Project {item}</h2>
                        <p className="text-secondary dark:text-secondary-foreground">An exciting project I worked on...</p>
                        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                            {/* Hidden details */}
                            <p className="text-accent dark:text-accent-foreground">Technologies used: HTML, CSS, JS...</p>
                            <a href="#" className="text-accent hover:underline dark:text-accent-foreground">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
