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
      className="fixed bottom-[60px] right-[20px]   text-[1.4rem] bg-[#21897E] text-white rounded-full cursor-pointer z-[999] "
        onClick={scrollToTop}
        style={{
          padding: "4px 18px"
        }}
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
