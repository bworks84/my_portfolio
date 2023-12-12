import React, { useEffect, useState } from "react";
import CCP from "../Badges/CCP";
import SAA from "../Badges/SAA";
import Sec from "../Badges/Sec";
import CySA from "../Badges/CySA";
import CSAP from "../Badges/CSAP";
import "./BadgeBar.css";
import Net from "../Badges/Net";

const BadgeBar = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";

    script.onload = () => {
      console.log("Credly script loaded");
      setScriptLoaded(true);
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!scriptLoaded) {
    return <div>Loading...</div>;
  }

  const Badge = ({ badgeId }) => {
    const renderBadge = () => {
      switch (badgeId) {
        case "e66ca326-d3fd-4e17-9e9e-688b5e6a76aa":
          return <CCP badgeId={badgeId} />;
        case "37e8f8fd-98cf-487d-bb1d-e8969536d651":
          return <SAA badgeId={badgeId} />;
        case "d447726d-5292-419c-aff6-7f2d11784e85":
          return <Sec badgeId={badgeId} />;
        case "a1add9b2-304a-4076-a2b2-f938718d749e":
          return <Net badgeId={badgeId} />;
        case "081c6c68-8cd3-4d59-9c3f-21c5f84e905a":
          return <CySA badgeId={badgeId} />;
        case "252e556f-5c83-4b6a-b3df-9c9807787abf":
          return <CSAP badgeId={badgeId} />;
        default:
          return null;
      }
    };

    return <div className="credly-badge">{renderBadge()}</div>;
  };

  return (
    <div className="credly-badge-container">
      <Badge badgeId="e66ca326-d3fd-4e17-9e9e-688b5e6a76aa" />
      <Badge badgeId="37e8f8fd-98cf-487d-bb1d-e8969536d651" />
      <Badge badgeId="d447726d-5292-419c-aff6-7f2d11784e85" />
      <Badge badgeId="a1add9b2-304a-4076-a2b2-f938718d749e" />
      <Badge badgeId="081c6c68-8cd3-4d59-9c3f-21c5f84e905a" />
      <Badge badgeId="252e556f-5c83-4b6a-b3df-9c9807787abf" />
    </div>
  );
};

export default BadgeBar;
