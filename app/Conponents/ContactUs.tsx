



import { CircleUserRound } from 'lucide-react';
import React from 'react'


const ContactUs = () => {
  return (

  <main className='my-8'>
           <div className='place-items-center mt-12 mb-2'> 
           <CircleUserRound  className='size-12 ' /> 
            <h1 className='text-2xl font-bold text-center ' > Contact Us</h1></div>
       
    <section className=' container mx-auto py-10 px-4'>

     
  
<form className='flex flex-col gap-8'> 
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
<input type='text' placeholder='Name' required className='inputStyle' />

<input type='text' placeholder='Email' required className='inputStyle' />
</div>
<input type='text' placeholder='Subject' required className='inputStyle' />
<textarea rows={6} placeholder='Message' className='inputStyle' required>
    </textarea>

        <div>
    <button type="submit" className='btn'> Send Message</button>
    </div>

 </form>
    </section>
    </main>

  )
}

export default ContactUs;