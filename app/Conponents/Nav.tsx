
"use client"


import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';




        export default function NavBar() {
        
        
        
         return (

          <nav className=' flex items-center justify-between  py-2 px-5 bg-gray-900 text-white  sticky top-0 z-10'>

            <div >
                  <img src='/Logo1.jpg' className='rounded-full' width={70} height={80} alt="Logo"/>
            </div>
            
            <div className='hidden md:block'>
          <ul className='flex  space-x-7 text-xl'>
          <Link href="/" ><li className='hover:font-bold'> Home </li></Link>
            <Link href="/Apply" ><li className='hover:font-bold' >Admission</li></Link>
            <Link href="/Course" ><li className='hover:font-bold'>Courses </li></Link>
            <Link href="/Result" ><li className='hover:font-bold'> Result</li></Link>
            <Link href="/About" ><li className='hover:font-bold'>About</li></Link>
            <Link href="/Contact" ><li className='hover:font-bold'>Contact</li></Link>
          </ul>

            </div>
            

            <div className='md:hidden'>
            <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader> 
    <div className='mx-auto' >
                  <img src='/Logo1.jpg' className='rounded-full' width={100} height={100} alt="Logo"/>
            </div>
      <SheetTitle>
        <h1 className='text-center text-sm text-blue-900 font-bold '>Shaheed Nasrullah Gadani Academy </h1></SheetTitle>
      <SheetDescription>
      <div className=''>
          <ul className='flex flex-col items-center  space-y-2 mt-4 text-center text-xl text-black '>
            <Link href="/" ><li className='hover:font-bold'> Home </li></Link>
            <Link href="/Apply" ><li className='hover:font-bold' >Admission</li></Link>
            <Link href="/Course" ><li className='hover:font-bold'>Courses </li></Link>
            <Link href="/Result" ><li className='hover:font-bold'> Result</li></Link>
            <Link href="/About" ><li className='hover:font-bold'>About</li></Link>
            <Link href="/Contact" ><li className='hover:font-bold'>Contact</li></Link>
  
          </ul>

            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>





          </nav>
         
        
     
        
        
         );
        }
      