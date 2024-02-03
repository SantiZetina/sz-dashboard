import RootLayout from "../layout";

export default function ContactPage() {
    return (
        <RootLayout>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-900 text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
                    Contact Me
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:mt-6 sm:text-xl">
                    Feel free to reach out for collaborations or just a friendly hello!
                </p>
                <div className="mt-8">
                    {/* Contact form or contact information here */}
                    {/* You can later add a form with input fields for name, email, message, etc. */}
                </div>
            </div>
        </RootLayout>
    );
}
