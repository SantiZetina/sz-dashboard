// import { Alert, AlertDescription, AlertTitle} from '../components/ui/alert';
// import RootLayout from './layout';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import WelcomePage from './welcome/page';



export default function Page() {
  return (
    <main className='flex min-h-screen flex-col p-4 sm:p-6'>
      <div className='flex flex-col items-center justify-center md:justify-center 
        text-center gap-y-8 flex-1 px-4 sm:px-6 pb-10'>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">Welcome</h1>
        <div className="typing-container">
          <h3 className='typing-effect text-sm sm:text-md md:text-lg'>Welcome to my page, my name is Santiago</h3>
        </div>
      </div>
    </main>
  )
}