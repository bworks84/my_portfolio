import React from "react";
import "./Footer.css"; // Import the styles
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the API call has been made in the current session
    const apiCallMade = JSON.parse(sessionStorage.getItem("apiCallMade"));

    if (!apiCallMade) {
      // If API call has not been made in the current session, proceed with the API call
      const apiUrl =
        "https://th0juwozk1.execute-api.us-east-1.amazonaws.com/Production_portfolio";

      axios
        .post(apiUrl)
        .then((response) => {
          const parsedBody = JSON.parse(response.data.body);
          const newCount = parsedBody.count;

          // Set the count in the state
          setCount(newCount);
          setLoading(false);

          // Store the count in localStorage
          localStorage.setItem("count", JSON.stringify(newCount));

          // Mark that the API call has been made in the current session
          sessionStorage.setItem("apiCallMade", JSON.stringify(true));
        })
        .catch((error) => {
          console.error("Error fetching count:", error);
          setLoading(false);
        });
    } else {
      // If API call has been made in the current session, retrieve the count from localStorage
      const storedCount = JSON.parse(localStorage.getItem("count"));

      if (storedCount !== null) {
        setCount(storedCount);
        setLoading(false);
      }
    }
  }, []);

  return (
    <footer className="footer">
      <br />
      <div id="visitor-counter">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <h3>You are number {count} to visit my site!</h3>
        )}
      </div>
    </footer>
  );
};

export default Footer;
