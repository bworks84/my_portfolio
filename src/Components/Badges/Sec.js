import React, { useEffect } from "react";

const Sec = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="d447726d-5292-419c-aff6-7f2d11784e85"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default Sec;
