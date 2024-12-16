// src/pages/Plans.js
import  {  useState,useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe("pk_test_51QVTO5Gmj0jqZUZNRhkxwjXyrfJvbJj8Fecx1c0RwH2UNkc3uekIwYoaJmpIOdDAlaZGeJxF6RyAUV7DLvthRMEp007gWwdNxr");

async function handleCheckout(product) {
    const stripe =  await stripePromise;

  const response=await fetch('http://localhost:5000/api/create-checkout-session',{method:'Post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product)
   })
   const session= await response.json()
  
    await stripe.redirectToCheckout({ sessionId: session.id });
  };


const Plans = () => {
  const [Plan,setPlan]=useState()
  let user=JSON.parse(localStorage.getItem('user'))
  useEffect(() =>{
fetch('http://localhost:5000/api/plans').then(response=>{
  if(!response.ok){
    throw new Error("something went wrong")
  }
return response.json()})
.then(data => setPlan(data)).catch(error => console.log(error))
},[])
function IntiatePayment(id,name,price){
  const product={
    'userId':user.id,
    'id':id,
    'name':name,
    'price':price
  }
 
 handleCheckout(product)
}
return(
  <>
{Plan?(<>
  <div className="flex lg:flex-row sm:flex-col xs:flex-col gap-10 justify-center mt-10  mx-auto px-4">
  {Plan.map((plan)=>{
    return(

<div key={plan._id} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.name}</h5>
<div class="flex items-baseline text-gray-900 dark:text-white">
<span class="text-3xl font-semibold">₹</span>
<span class="text-5xl font-extrabold tracking-tight">{plan.price}</span>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">/years</span>
</div>
<ul  class="space-y-5 my-7">
<li class="flex items-center">
<svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"> upto  {plan.maxUsers} users</span>
</li>
<li class="flex">
<svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
</svg>
<span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{plan.features}</span>
</li>
</ul>
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
onClick={()=>IntiatePayment(plan._id,plan.name,plan.price)}>
  Choose plan</button>

</div>)})}</div></>):null}

</>
)}

export default Plans;
