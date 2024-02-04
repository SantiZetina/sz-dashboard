import RootLayout from "../layout";

export default function AboutPage() {
    return (
     
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pb-24 text-center gap-y-8">
                <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-8xl font-bold">
                    About Me
                </h1>
                <p className="text-sm sm:text-md md:text-lg">
                    {/* Brief description or introduction */}
                    Im a passionate web developer specializing in modern web technologies...
                </p>
                {/* Additional content */}
                <div className="max-w-full mx-auto">
                    {/* Further details about your journey, skills, etc. */}
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        My Journey
                    </h2>
                    <p className="mt-4">
                        I began my coding journey...
                    </p>
                    {/* More content as needed */}
                </div>
            </div>
        
    );
}
