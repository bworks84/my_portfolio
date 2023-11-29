import React, { useEffect } from "react";

const CCP = () => {
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
      data-share-badge-id="e66ca326-d3fd-4e17-9e9e-688b5e6a76aa"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default CCP;
