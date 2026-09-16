import { useState, useSyncExternalStore } from "react"


const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')



const submitHandler = (e) =>{
  e.preventDefault()
  console.log("email is ", email)
  console.log("password is ", password)
  setEmail('')
  setPassword('')
}




  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black ">
     <div className="border-2 border-emerald-600 text-white p-20 rounded-xl">
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}
      className='flex flex-col items-center justify-center'>
        <input  value={email}
        onChange={(e) =>{
          setEmail(e.target.value)
        }}
         required className='border-2 border-emerald-600  text-xl outline-none bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400 ' type='email' placeholder='Enter Your Email'/>
        <input value={password}
        onChange={(e) =>{
          setPassword(e.target.value)
        }}
        required className='border-2 border-emerald-600  text-xl outline-none bg-transparent py-3 px-5 mt-5 rounded-full placeholder:text-gray-400 ' type='password' placeholder='Enter Password'/>
        <button className=' bg-emerald-600 mt-5 text-xl outline-none  py-3 px-5 rounded-full w-full placeholder:text-gray-400 '>Log In </button>
      </form>
     </div>
      
    </div>
   
  )
}

export default Login
