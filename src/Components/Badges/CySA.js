import React, { useEffect } from "react";

const CySA = () => {
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
    <div>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="081c6c68-8cd3-4d59-9c3f-21c5f84e905a"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </div>
  );
};

export default CySA;
