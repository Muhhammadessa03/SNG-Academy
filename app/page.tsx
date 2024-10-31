"use client"



import Card2 from "./Conponents/Card2";
import ContactUs from "./Conponents/ContactUs";
import Courses from "./Conponents/Courses";

import Director from "./Conponents/Director";

import HeroSection from "./Conponents/HeroSection";








export default function Home() {
  return (
<main className="my-12">


  


<HeroSection/>
<Courses/>
<Card2/>
<Director/>
<ContactUs/>





</main> 
  );
}