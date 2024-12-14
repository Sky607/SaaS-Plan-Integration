import React, { useEffect, useState } from 'react';

const CrudPlans = () => {
  const [plans, setPlans] = useState([]);
  const [name,setName] = useState('');
  const [prices,setPrices] = useState()
const [maxUsers,setMaxUsers] = useState()
const [descriptions,setDescriptions] = useState()

useEffect(() => {
  fetchPlans();
}, []);

  const fetchPlans = async () => {
    try {
      const response =await fetch('http://localhost:5000/api/plans/')
     if(response.ok){
      const result = await response.json()
      setPlans(result);
     }}
    catch(err){
      console.log(err)
    }
    }
  
 const formData={
  name:name,
  price:prices,
  maxUsers:maxUsers,
  features:descriptions
 }


 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/plans/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
   fetchPlans()
      alert('Plan created!');
    } else {
      alert('Failed to create the plan.');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while creating the plan.');
  }
};

  const handleUpdate = async (e,id) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:5000/api/plans/${id}`, { method: 'PUT' ,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  await fetchPlans();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (e,id) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:5000/api/plans/${id}`, { method: 'DELETE' });
      await fetchPlans();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
   <div>
     <form  onSubmit={handleSubmit}
     id="form-save" className="w-full max-w-sm ">
          <h2>Create plans</h2>
         <div className="md:flex md:items-center mb-6">
             <div className=" md:w-1/4">
             <label for="name"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                 Name
             </label>
             </div>
             <div className="md:w-4/5"></div>
         <input id="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text" placeholder='Plan Name' value={name}onChange={(e)=>setName(e.target.value)}/>
         </div>
         <div className="md:flex md:items-center mb-6">
             <div className=" md:w-1/4">
            <label for="price"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                 price
             </label>
             </div>
             <div className="md:w-3/4"></div>
         <input id="price"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number" placeholder="price"value={prices} onChange={(e)=>setPrices(e.target.value)}
         />
         </div>
         <div className="md:flex md:items-center mb-6">
             <div className=" md:w-1/4">
             <label for="maxUsers"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                 MaxUsers
             </label>
             </div>
             <div className="md:w-3/4"></div>
         <input id="maxUsers"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number" placeholder="maxUsers" value={maxUsers}onChange={(e)=>setMaxUsers(e.target.value)}/>
         
         </div>
         <div className="md:flex md:items-center mb-6">
             <div className=" md:w-1/4">
             <label for="description"className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                 Description
             </label>
             </div>
             <div className="md:w-3/4"></div>
         <input id="description"className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="textarea" placeholder="Description"value={descriptions}onChange={(e)=>setDescriptions(e.target.value)}/>
         </div>
         <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Create Plan</button>
               </form>
               </div>

{plans?(<>
{plans.map((plan)=>{
  return (
    <>
 <div className="mt-4 px-4 text-xl">
 <p>Plan Name : {plan.name}</p>
<p>{plan._id}</p>
 <p>Plan Price : {plan.price}</p>
 <p>Plan Features : {plan.features}</p>
 <button onClick={(e)=>{handleUpdate(e,plan._id)}}>Edit</button> <button onClick={(e)=>{handleDelete(e,plan._id)}}>Delete</button>
 </div>
</>)  })} </> ):<h1>No plans to display</h1>  }           
</>
  );
};

export default CrudPlans;
