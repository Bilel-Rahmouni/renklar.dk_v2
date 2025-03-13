// src/components/CookieConsentBanner.js
import React, { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { useCookies } from "react-cookie";

const CookieConsentBanner = () => {
  const [cookies, setCookie] = useCookies(["user_cookie_consent"]);
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentDeclined, setConsentDeclined] = useState(false);

  useEffect(() => {
    if (cookies.user_cookie_consent) {
      setConsentGiven(true);
    } else if (consentDeclined) {
      setConsentDeclined(true);
    }
  }, [cookies, consentDeclined]);

  const handleAccept = () => {
    setCookie("user_cookie_consent", "true", {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
    });
    setConsentGiven(true);
  };

  const handleDecline = () => {
    setCookie("user_cookie_consent", "false", {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
    });
    setConsentDeclined(true);
  };

  if (consentDeclined) {
    return null;
  }

  return (
    <CookieConsent
      enableDeclineButton
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="user_cookie_consent"
      style={{
        background: "#2B2B2B",
        color: "#FFFFFF",
        fontSize: "14px",
        paddingBottom: 50,
      }}
      buttonStyle={{
        color: "#FFFFFF",
        background: "#007BFF",
        fontSize: "14px",
      }}
      declineButtonStyle={{
        color: "#FFFFFF",
        background: "#FF0000",
        fontSize: "14px",
      }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      This website uses cookies to enhance the user experience. By continuing to
      use this site, you consent to the use of cookies in accordance with our{" "}
      <a href="/terms-and-conditions" style={{ color: "#00D2FF" }}>
        Privacy Policy
      </a>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
