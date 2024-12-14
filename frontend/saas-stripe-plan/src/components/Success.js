import React, { useEffect, useState } from 'react';

const Success = () => {
  const [paymentStatus, setPaymentStatus] = useState('Processing...');
  const sessionId = new URLSearchParams(window.location.search).get('session_id');

  useEffect(() => {
    if (sessionId) {
      fetch(`http://localhost:5000/api/verify-session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setPaymentStatus('Payment Successful!');
            // Here, you can also update the database or notify the user of the success
          } else {
            setPaymentStatus('Payment Failed');
          }
        })
        .catch(err => {
          console.error(err);
          setPaymentStatus('Error processing payment');
        });
    }
  }, [sessionId]);

  return (
    <div>
      <h2>{paymentStatus}</h2>
    </div>
  );
};

export default Success;
