
import Link from "next/link";
import Nasrullah from "/public/Nasrullah.png";
import Image from "next/image";


export default function HeroSection() {
  return (
 
   
      <section >
        
      <div className="flex flex-col items-center md:flex-row gap-36  ">
       
        {/* Left Side */}

        <div className="md:max-w-3xl">
          <h4 className=" text-blue-900 font-semibold text-lg"> Shaheed Nasrullah Gadani Academy</h4>
          <h1 className="text-4xl font-bold sm:text-6xl"> Shaheed Nasrullah Gadani </h1>
            <p className="mt-2 text-slate-600 text-lg sm:text-xl text-justify"> This academy is a great tribute to Martyred Journalist Nasrullah Gadani , who was brutally  murdered due to just and fair journalism who raised his voice against the gangs, mafias, white collar criminals and so called feudals; in favour of innocents, lower class community and for common man beyond the cast, creed, color and religion.
            May his sole rest in peace.
            </p>

            <div>
      
          <Link href="/Apply" > <button className="btn">Enroll Now</button></Link>
           </div>
           
           


        </div>
        <div className="flex-1 mt-4 md:max-w-3xl"> 
          {/*   Right Side */}
         
            <Image src={Nasrullah} className="border rounded-md  h-100 w-100" alt="Logo"/>
          </div>

      </div>
 

      </section>
      

  );
}
