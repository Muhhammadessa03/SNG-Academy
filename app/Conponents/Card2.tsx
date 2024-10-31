

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
export default function (){
 

    return(
       
<main >
   
<div className="grid gap-4 mt-4 lg mx-auto">
    

    <Carousel>
  <CarouselContent>
    <CarouselItem> <img className="h-full w-full rounded-lg  mx-auto hover:scale-95" src="/students1.jpg" alt=""/></CarouselItem>
    <CarouselItem>  <img className="h-full w-full rounded-lg hover:scale-110" src="/Abdul Manan.jpg" alt=""/></CarouselItem>
    <CarouselItem>  <img className="h-full w-full rounded-lg hover:scale-110" src="/sana3.jpg" alt=""/></CarouselItem>
    <CarouselItem>  <img className="h-full w-full rounded-lg hover:scale-110" src="/Image1.jpg" alt=""/></CarouselItem>
    <CarouselItem>  <img className="h-full w-full rounded-lg hover:scale-110" src="/Image2.jpg" alt=""/></CarouselItem>
    <CarouselItem>  <img className="h-full w-full rounded-lg hover:scale-110" src="students.jpg" alt=""/>   </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>




</div>
</main>


    )
}