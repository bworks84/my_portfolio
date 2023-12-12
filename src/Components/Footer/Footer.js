import React from "react";
import "./Footer.css"; // Import the styles
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This is to prevent the API firing on every render
    // console.log("useEffect called");
    const apiCallMade = localStorage.getItem("apiCallMade");

    if (!apiCallMade) {
      //initialise local storage
      localStorage.setItem("apiCallMade", true);
    }
    console.log("apiCallMade:", apiCallMade);

    const apiUrl =
      "https://th0juwozk1.execute-api.us-east-1.amazonaws.com/Production_portfolio";

    if (apiCallMade) {
      console.log("API call already made");
      // Trigger the API to increment the counter
      axios
        .post(apiUrl)
        .then((response) => {
          const parsedBody = JSON.parse(response.data.body);
          const newCount = parsedBody.count;
          console.log("Parsed body:", parsedBody);

          setCount(newCount);
          setLoading(false);

          localStorage.setItem("apiCallMade", true);
        })
        .catch((error) => {
          console.error("Error fetching count:", error);
          setLoading(false);
        });
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
