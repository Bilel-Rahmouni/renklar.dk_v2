// src/components/ScriptLoader.js
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

const ScriptLoader = () => {
  const [cookies] = useCookies(["user_cookie_consent"]);

  useEffect(() => {
    if (cookies.user_cookie_consent === "true") {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16609682756";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", "AW-16609682756");
      };
    }
  }, [cookies]);

  return null;
};

export default ScriptLoader;
