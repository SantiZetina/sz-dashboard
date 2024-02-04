
export default function AboutPage() {
    return (
        <div className="container mx-auto p-4">
            {/* Header Section */}
            <div className="text-center">
            <h1 className="text-3xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100">Santiago</h1>
                <p className="mt-2 text-sm sm:text-md text-gray-600 dark:text-gray-300">Web Developer | Tech Enthusiast</p>
            </div>

            {/* Introduction Area */}
            <div className="mt-8 bg-gray-100 dark:bg-black p-4 rounded">
                <p className="text-md text-gray-800 dark:text-gray-200">
                    Hi, Im Santiago. Born in Mexico City, I moved to the States in 2012 and embarked on a journey in web development. Im a proud graduate of the Georgia Tech MERN Boot Camp.
                </p>
            </div>

            {/* Skills and Expertise Section */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Placeholder for skills with icons */}
                {[1, 2, 3, 4].map((skill) => (
                    <div key={skill} className="flex flex-col items-center">
                        {/* Replace with actual icon */}
                        <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                        <p className="mt-2 text-sm">Skill {skill}</p>
                    </div>
                ))}
            </div>

            {/* Personal Story Section */}
            <div className="mt-8 flex flex-col dark:bg-black lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold">My Journey</h2>
                    <p className="mt-4">
                        I began my coding journey with a passion for building and creating digital solutions...
                    </p>
                    {/* Additional personal story content */}
                </div>
                <div className="lg:w-1/2 dark:bg-black">
                    {/* Placeholder for images or illustrations */}
                    <div className="h-64 bg-gray-200 rounded"></div>
                </div>
            </div>

        </div>
    );
}

