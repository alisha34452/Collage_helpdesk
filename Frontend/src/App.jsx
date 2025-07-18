import React from "react";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "./assets/components/landing";
import Admission from "./assets/components/admission.jsx";
import Department from "./assets/components/department.jsx";
import Resources from "./assets/components/resources.jsx";
import ScrollToTopButton from "./assets/components/scroll.jsx";
import NewApplicants from "./assets/components/NewApplicants.jsx";
import { useEffect } from "react";
import Error from "./assets/components/error.jsx";
import Devloper from "./assets/components/devloper.jsx";
import Gallery from "./assets/components/gallery.jsx";






const App = () => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/api/v1/track`, {
      method: "GET",
    }).catch((err) => {
      console.error("Failed to update visitor count:", err);
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Landing />
          <Footer />
        </>
      ),
    },
    {
      path: "/NewApplicants",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <NewApplicants />
          <Footer />
        </>
      ),
    },
    {
      path: "/admissions",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Admission />
          <Footer />
        </>
      ),
    },
    {
      path: "/departments",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Department />
          <Footer />
        </>
      ),
    },
    {
      path: "/resources",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Resources />
          <Footer />
        </>
      ),
    },
    {
      path: "/developer",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Devloper />
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar />
          <ScrollToTopButton />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar />
          <Error />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
