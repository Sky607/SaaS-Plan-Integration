import React, { useState } from 'react';
import { useNavigate,Link } from "react-router-dom"

export default function Register(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const[email,setEmail]=useState("")
   

  let user=JSON.parse(localStorage.getItem('user'))

  let url,role
function UserRegister(e){
e.preventDefault()
if(user.role==='super-admin') {url='http://localhost:5000/api/users/admin';
  role='admin'
}
if(user.role==='admin'){
   url='http://localhost:5000/api/users/user'
   role='user'
}
fetch(url,{method: 'POST',headers:{
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user.token}`,
},
body:JSON.stringify({
    name:username,
    email:email,
    password:password,
    role:role,
    adminId:user.id,
    
})
}).then((response) =>{
   if(!response.ok){
    throw new Error()
   }
else if(response.status===403){
    alert("You reached user creation limit upgrade your plan")
}
   else if(response.ok){
    alert("users created successfully")
   }
   
    return response.json()}).then(data=>{
     
    }).catch(error => {
        console.log(error.message)
    })
}
return(
<div>
           <form  onSubmit={UserRegister}
        id="form-save" className="w-full max-w-sm ">
             <h2>If  Registered Please <Link to="/Login">Login </Link></h2><br/>
            <div className="md:flex md:items-center mb-6">
                <div className=" md:w-1/4">
                <label for="username"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Username
                </label>
                </div>
                <div className="md:w-4/5"></div>
            <input id="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 type="text" value={username} onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className=" md:w-1/4">
                <label for="email"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Email
                </label>
                </div>
                <div className="md:w-3/4"></div>
            <input id="email"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 type="email" value={email} onChange={(e)=>{
               setEmail(e.target.value);
            }}/>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className=" md:w-1/4">
                <label for="password"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Password
                </label>
                </div>
                <div className="md:w-3/4"></div>
            <input id="password"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 type="password" value={password} onChange={(e)=>{
               setPassword(e.target.value);
            }}/>
            </div>
         
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Register</button>
           
            
                  </form>
                  </div>
)}