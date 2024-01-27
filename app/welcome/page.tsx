import Navbar from "@/components/ui/navbar";
import RootLayout from "../layout";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
 // Import the useClient hook

export default function WelcomePage() {

    return (
        <RootLayout>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Welcome</h1>
               
                <h3>Welcome to my page my name is</h3>
                
            </div>
        </RootLayout>
    )
}