// import { Alert, AlertDescription, AlertTitle} from '../components/ui/alert';
// import RootLayout from './layout';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import WelcomePage from './welcome/page';
import Navbar from "@/components/ui/navbar"


export default function Page() {
  const typingEffectStyle = {
    animation: `typing 5s linear forwards, blink 0.75s step-end infinite`,
    borderRight: `3px solid transparent`,
    width: '0'
    }
    return (
      <main className='flex min-h-screen flex-col p-4 sm:p-6'>
        <div className='flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-4 sm:px-6 pb-10'>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">Welcome</h1>
          <div className="max-w-full mx-auto">
            <h3 className='inline-block overflow-hidden whitespace-nowrap text-sm sm:text-md md:text-lg' style={typingEffectStyle}>
              Welcome to my page, my name is Santiago
            </h3>
          </div>
        </div>
      </main>
    )
}