import React, { useEffect } from "react";

const CSAP = () => {
  useEffect(() => {
    // Add the Credly badge script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="252e556f-5c83-4b6a-b3df-9c9807787abf"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default CSAP;
