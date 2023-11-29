import React, { useEffect } from "react";

const Net = () => {
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
      data-share-badge-id="a1add9b2-304a-4076-a2b2-f938718d749e"
      data-share-badge-host="https://www.credly.com"
    ></div>
  );
};

export default Net;
