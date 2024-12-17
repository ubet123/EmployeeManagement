import React, { useState } from 'react'

const Login = ({handleLogin}) => {

const [email, setEmail] = useState('')
const[password,setPassword]=useState('')


    const submitHandler=(e)=>{
        e.preventDefault()
       handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 rounded-xl border-emerald-600 p-20' >
        <form onSubmit={(e)=>{
               submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
         setEmail(e.target.value)
          }}
          
          required className='border-2 border-emerald-600 rounded-full py-3 bg-transparent outline-none placeholder:text-gray-400 text-white pl-5 pr-16 text-xl' type="email" placeholder='Enter Email'/>
          <input 
          value={password}
          onChange={(e)=>{
         setPassword(e.target.value)
          }}
          
          required className='border-2 border-emerald-600 rounded-full py-3 bg-transparent outline-none placeholder:text-gray-400 text-white px-5 text-xl mt-4' type="password" placeholder='Enter Password'/>
          <button className='mt-5 border-2 border-none rounded-full py-3 hover:bg-emerald-800  bg-emerald-600 outline-none placeholder:text-gray-400 text-white px-16 text-xl'>Log In</button>
        </form>
        
        </div>  
        
        
</div>
</>
  )
}

export default Login