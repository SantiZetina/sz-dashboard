import RootLayout from "../layout";
 // Import the useClient hook
 

export default function WelcomePage() {

    return (
        <RootLayout>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold">Welcome</h1>
               <div className="typing-container">
                <h3 className='typing-effect'>Welcome to my page, my name is Santiago</h3>
                </div>
            </div>
        </RootLayout>
    )
}