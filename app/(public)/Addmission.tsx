"use client"







import { useState } from 'react';
export default function AdmissionForm(){


  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender]= useState('');



  const [qualification, setQualification] = useState('');
  const handleSubmit = (e:any) => {
    e.preventDefault();

    console.log('Form submitted:', { name, email, phone,city,date,gender,qualification, course});
  };
    return(
<main className=' my-10'>
<h2 className="text-xl font-bold text-center mt-4 text-gray-800">Registeration Now  </h2>
<div className="max-w-md mx-auto p-4 bg-gray-300  rounded-lg shadow-md my-4">
  <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name" required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Father Name:
            </label>
            <input
              type="text"
              id="father-name"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              placeholder="Father Name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Number"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
              City:
            </label>
            <input
              type="City"
              id="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City" 
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Date of Birth" className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth :
            </label>
            <input
              type="date"
              id="Date of Birth"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date of Birth"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Gender" className="block text-gray-700 text-sm font-bold mb-2">
            Gender :
            </label>
            <input className="w-10" type="radio"  name="gender"  required value="Male" onChange={(e) => setGender(e.target.value)} />Male
            <input className="w-10" type="radio"  name="gender"  required value="Female" onChange={(e) => setGender(e.target.value)} />Female

            </div>


            <div className="mb-4">
            <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">
            Highest Qualification:
            </label>
            <select
              id="Qualifiction"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
    <option value="">Please Select</option>
    
              <option value="Under Middle(Under grade 8)">Under Middle(Under grade 8)</option>
              <option value="Matric / O Levels">Matric / O Levels</option>
              <option value="Intermediate / A Levels">Intermediate / A Levels</option>
            

            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">
              Select Course:
            </label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                <option value="">Please Select</option>
              <option value="English">English</option>
              <option value="Mathematics">Mathematics</option>
              <option value="No">Advance English</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
</div>
        </form>

    
  
</div>
</main>


)
}

