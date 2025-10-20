import { useState } from 'react'
import './App.css'

function App() {
  
  const[form, setForm] = useState({
    name:"",
    email:"",
    number:"",
    about:"",
    issue:""
  });

  const handleChange = (e) =>{
    setForm({...form , [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const res = await fetch("https://formbackend-production-e841.up.railway.app/",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(form),
    });

    const data= await res.json();
    console.log("Response:",data);
    alert(data.message);
  };

  return (
    <>
      <div>
        <header className=' fixed top-0 left-0 z-10 p-2 w-full bg-gradient-to-r from-indigo-500 to-purple-600'>
          <h1 className='text-2xl text-white font-bold pl-15 pt-5'>Behind The Profit</h1>
        </header>
        
        <div>
          
          
         <div className='flex flex-col items-center mt-20'>
           <h1 className='text-4xl text-cyan  font-bold bg-gradient-to-r mb-4 '>Resolution Center</h1>
          <p className='text-center max-w-2xl'>Having an issue with a Prop Firm or Broker? Our Resolution Center is here to help. Submit your concern below and our team will investigate and respond promptly.</p>
         </div>
        <div className='flex items-center justify-center'>
           <div className='h-10 flex items-center justify-center border-abcd border-6 border-solid rounded-xl mt-4 w-200'>
          <button className=' text-sm px:3 py:1.5 font-medium'>Submit a Report</button>
         </div>
        </div>
        
        <div className='flex items-center justify-center '>
          <div className='border-solid border-1 border-blue-600 rounded-xl mt-4 p-5 w-200'>
            <div className='ml-5'>
              <h1 className='mt-7 font-medium text-4xl'>Submit a Resolution Request</h1>
            <p className='mt-1 text-gray-600'>Fill out the form below with details about your issue</p>
           
            <form onSubmit={handleSubmit}>
             
            
            <div className='mt-5 '>
            <label htmlFor="name1">Your Name</label><br />
            <input type="text" name="name" id="name1" value={form.name} onChange={handleChange} className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="email1 ">Email Address</label><br />
            <input type="text" name="email" id="email1" value={form.email} onChange={handleChange} className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="number1">Phone Number</label><br />
            <input type="text" name="number" id="number1"  value={form.number} onChange={handleChange} className=' border-2 border-abcd h-10 w-full rounded-lg' />
            </div>

            <div className='mt-5'>
            <label htmlFor="about1">Reporting About</label><br />
            <input type="text" name="about" id="about1"  value={form.about} onChange={handleChange} className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="issue1">Describe your issue</label><br />
            <textarea name="issue" id="issue1" value={form.issue} onChange={handleChange}  className=' border-2 border-abcd min-h-40 w-full rounded-lg'></textarea>
            <p id=":ra:-form-item-description" className="text-m text-gray-600">Include any relevant details that could help us resolve your issue faster.</p>
            </div>
              <button type='submit' className='inline-flex h-10 border-abcd border-2 rounded-md w-full items-center justify-center text-zinc-50 bg-blue-500 font-medium'>Submit Report</button>
            
            </form>
            </div>
         </div>
        </div>
        
        </div>
        
      </div>
    </>
  )
}

export default App;
