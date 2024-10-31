import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");

    const fetchSessionDetails = async () => {
      if (sessionId) {
        try {
          const response = await fetch(
            `http://localhost:4242/save-order`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ sessionId }),
            }
          );
          const data = await response.json();
          if (response.ok) {
            setTotal(data.amountTotal / 100); // Amount is in cents
          } else {
            setError(data.error);
          }
        } catch (err) {
          setError("Failed to fetch session details.");
        }
      }
    };

    fetchSessionDetails();
  }, [location]);

  return (
    <div className="m-60 items-center">
      <h1>Payment Successful!</h1>
      {total !== null ? <p>Your total amount: ${total}</p> : <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Success;
