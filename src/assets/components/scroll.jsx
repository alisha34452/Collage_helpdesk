import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger it once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "60px",
          right: "20px",
          padding: "0.5rem 1rem",
          fontSize: "1.4rem",
          backgroundColor: "#21897E",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: "999",
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
