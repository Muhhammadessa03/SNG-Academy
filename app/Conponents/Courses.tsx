

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const Courses = () => {
  return (
   <section className='container mx-auto py-10 px-4 '>
           <div className='place-items-start my-10'> 
           
            <h1 className='text-2xl md:text-4xl font-bold text-left ' >Core Courses</h1>
            </div>


<Carousel>
  <CarouselContent>
  <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">  
   <div className='bg-blue-950 py-10 text-center px-10 w-full h-full flex items-center text-white '>
   <h1 className="text-2xl font-bold">Basic English Grammar </h1>

        </div></CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">   <div className='bg-blue-950 text-white py-10 px-10 w-full h-60 shadow-2xl flex items-center'>
           <h1 className="text-2xl  font-bold">Advance English Grammar </h1>
                
        </div></CarouselItem>
  
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">   <div className='bg-blue-950 py-10 px-10 w-full h-60 flex items-center font-bold text-white'>
      
    <h1 className="text-2xl items-center">Basic Mathematics Course </h1>
                
                
        </div></CarouselItem>
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>










   </section>
  )
}


export default Courses;