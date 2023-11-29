import React, { useEffect } from "react";

const SAA = () => {
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
      data-share-badge-id="37e8f8fd-98cf-487d-bb1d-e8969536d651"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default SAA;
