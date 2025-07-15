import React, { useEffect, useState } from "react";

const Footer = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage when component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark-mode");
      setTheme("light");
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 My College. Made with ❤️ by Prem and Akshay</p>
        <p>
          <a href="#">Terms & Privacy</a> |{" "}
          <span
            className="theme-toggle"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </p>
      </div>
      <p>
        🔗{" "}
        <a
          href="https://github.com/XYZcode94/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        /
        <a
          href="https://www.linkedin.com/in/prem-prakash-2bb94b358/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        /
        <a
          href="https://xyzcode94.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prem's Profile
        </a>
      </p>
      <p>
        🔗{" "}
        <a
          href="https://github.com/akshay0712-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        /
        <a
          href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        /
        <a
          href="https://akshay0712-dev.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akshay's Profile
        </a>
      </p>
    </footer>
  );
};

export default Footer;
