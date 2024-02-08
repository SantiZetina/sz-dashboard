export default function AboutPage() {
    return (
        <div className="container mx-auto p-4">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-3xl sm:text-6xl font-bold text-primary dark:text-primary-foreground">
                    Santiago
                </h1>
                <p className="mt-2 text-sm sm:text-md text-secondary dark:text-secondary-foreground">
                    Web Developer | Tech Enthusiast
                </p>
            </div>

            {/* Introduction Area */}
            <div className="mt-8 bg-card dark:bg-dark-card p-6 rounded-xl shadow-lg">
                <p className="text-md text-foreground dark:text-dark-foreground">
                    Hi, I'm Santiago. Born in Mexico City, I moved to the States in 2012 and embarked on a journey in web development. I'm a proud graduate of the Georgia Tech MERN Boot Camp.
                </p>
            </div>

            {/* Skills and Expertise Section */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {/* Skills with icons */}
                {['HTML5', 'CSS3', 'JavaScript', 'React'].map((skill) => (
                    <div key={skill} className="flex flex-col items-center p-4 bg-card rounded-xl shadow-lg">
                        <div className="h-12 w-12 bg-accent rounded-full mb-2">
                            {/* Placeholder for actual skill icon */}
                        </div>
                        <p className="text-sm text-foreground">{skill}</p>
                    </div>
                ))}
            </div>

            {/* Personal Story Section */}
            <div className="mt-8 flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 bg-card p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-foreground">My Journey</h2>
                    <p className="mt-4 text-foreground">
                        I began my coding journey with a passion for building and creating digital solutions...
                    </p>
                    {/* Additional personal story content */}
                </div>
                <div className="lg:w-1/2 bg-card p-6 rounded-xl shadow-lg">
                    {/* Placeholder for images or illustrations */}
                    <div className="h-64 bg-accent rounded"></div>
                </div>
            </div>
        </div>
    );
}
