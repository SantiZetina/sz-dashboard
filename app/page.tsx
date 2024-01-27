import { Alert, AlertDescription, AlertTitle} from '../components/ui/alert';
import RootLayout from './layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import WelcomePage from './welcome/page';



export default function Page() {
  return (
    <div className='flex min-h-screen flex-col p-6'>
    <div className='flex flex-col items-center justify-center md:justify-center 
    text-center gap-y-8 flex-1 px-6 pb-10'>
     
      <WelcomePage />
    </div>
    </div>
  )
}