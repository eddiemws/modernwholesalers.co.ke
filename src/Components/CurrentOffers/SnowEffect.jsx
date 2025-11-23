// SnowEffect.jsx
import React, { useEffect } from "react";
import "./CurrentOffers"; // ensure the snowflake CSS loads

const SnowEffect = () => {
  useEffect(() => {
    const snowInterval = setInterval(() => {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = "❄";

      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.fontSize = 12 + Math.random() * 18 + "px";
      snowflake.style.opacity = Math.random().toString();
      snowflake.style.animationDuration = 4 + Math.random() * 6 + "s";

      document.body.appendChild(snowflake);

      setTimeout(() => snowflake.remove(), 10000);
    }, 200);

    return () => clearInterval(snowInterval);
  }, []);

  return null; // this component renders nothing; it just creates snow
};

export default SnowEffect;
