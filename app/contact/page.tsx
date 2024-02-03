import RootLayout from "../layout";

export default function ContactPage() {
    return (
        <RootLayout>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pb-24 text-center gap-y-8 bg-background text-foreground">
                <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-8xl font-bold">
                    Contact Me
                </h1>
                <p className="text-sm sm:text-md md:text-lg">
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>
                <div className="max-w-full mx-auto">
                    {/* Contact form or contact information here */}
                </div>
            </div>
        </RootLayout>
    );
}

