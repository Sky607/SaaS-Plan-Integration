// src/pages/OrderHistory.js
import React, { useEffect, useState } from "react";

let user=JSON.parse(localStorage.getItem("user"))

const OrderHistory = () => {
  const [payment, setPayment] = useState([]);
  const [plan , setPlan] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/order/${user.id}`).then((response) =>response.json())
    .then(({payments,plans})=>{
      setPayment(payments)
      setPlan(plans)
  })
  }, [user.id]);
  return (
   <>
   <div className="mt-4 px-4 text-xl">
      <h2>Order History</h2>
    {plan.map((plan)=>{
      return(
        <>
        <h1>Plan History</h1>
        <p>Plan Name : {plan.name}</p>
        <p>Plan Price : {plan.price}</p>
        <p>Plan Features : {plan.features}</p>
        </>
      )
    })}
     {payment.map((payment)=>{
      return(
        <>
        <h1>Payment History</h1>
        <p>Payment Amount : {payment.amount}</p>
        <p>Payment Date : {payment.paymentDate}</p>
        <p>Payment Status : {payment.paymentStatus}</p>
        
        </>
      )
    })}
    </div>
    </>
  
  );
};

export default OrderHistory;
