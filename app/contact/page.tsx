export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 pb-24 text-center gap-y-8 bg-background text-foreground">
            <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-8xl font-bold">
                Contact Me
            </h1>
            <p className="text-sm sm:text-md md:text-lg">
                Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="w-full max-w-md mx-auto mt-8">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


