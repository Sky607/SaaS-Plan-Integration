import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
function UserLogin(e){
e.preventDefault()
const url='http://localhost:5000/api/users/auth/login';
fetch(url,{method: 'POST',headers:{
    'Content-Type': 'application/json'
},
body:JSON.stringify({
    email:username,
    password:password,
})
}).then((response) =>{
   if(!response.ok){
    alert('check your credentials')
    throw new Error("something went wrong")
   }
    return response.json()}).then(data=>{
       localStorage.setItem('user',JSON.stringify(data))
       navigate('/dashboard')
       window.location.reload()
    }).catch(error => {
        console.log(error)
    })
}
return(
<div>
           <form  onSubmit={UserLogin}
        id="form-save" className="w-full max-w-sm ">
            
            <div className="md:flex md:items-center mb-6">
                <div className=" md:w-1/4">
                <label for="username"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Email
                </label>
                </div>
                <div className="md:w-4/5"></div>
            <input id="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 type="text" value={username} onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className=" md:w-1/4">
                <label for="password"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Password
                </label>
                </div>
                <div className="md:w-3/4"></div>
            <input id="password"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 type="password" value={password} onChange={(e)=>{
               setPassword(e.target.value);
            }}/>
            </div>
            <h3>If not Registered Please <Link to="/register"><u>Register</u> </Link></h3><br/>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Login</button>
           
            
                  </form>
                  </div>
)}
  

