import React, { useState,useEffect } from 'react';

const user=JSON.parse(localStorage.getItem('user'))
export default function SuperAdminDashboard() {
const [admin,setAdmin]=useState([])
  useEffect(() =>{
    getAdmin()
    },[])
    async function getAdmin(){
    const response = await fetch('http://localhost:5000/api/admin/list')
        if(response.ok){
            const result= await response.json()
            setAdmin(result)
        }
       else{
        alert(response.status,"failed to fetch")
       }
    }

    console.log(admin)
return (
<>
<h1 className='text-xl bg-blue-500 p-4'>Welcome {user.role} Dashboard </h1>
{user?(<>
{admin.map((adminUser)=>{
    return(
        <>
        

<div class="mt-3 relative overflow-x-auto">
    <h1 className="text-2xl text-left mb-2">List of Admin users</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    id
                </th>
                <th scope="col" class="px-6 py-3">
                    admin name
                </th>
                <th scope="col" class="px-6 py-3">
                    admin plan
                </th>
                <th scope="col" class="px-6 py-3">
                    plan feature
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {adminUser._id}
                </th>
                <td class="px-6 py-4">
                    {adminUser.name}
                </td>
                <td class="px-6 py-4">
                    {adminUser.plan.name}
                </td>
                <td class="px-6 py-4">
                    {adminUser.plan.maxUsers} {adminUser.plan.features}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

        </>
    )
})}
</>
):<h1 className='text-xl bg-blue-500 p-4'>Welcome {user.role} Dashboard </h1>
}
</>
)
}

