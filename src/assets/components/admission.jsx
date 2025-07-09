import React from "react";
import '../css/adm.css'


const Admission = () => {
  return (
    <div>
       
      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Admissions Help Desk</h1>
          <p>We Provide All The Information related to Admission Quarry</p>
          <a href="#contact" className="btn">
            Want to personal concern
          </a>
        </div>
      </section>

      <section className="section" id="documents">
        <h2>Documents</h2>
        <div className="documents-grid">
          <div>
            <i className="fa-solid fa-file"></i>Gap Format
          </div>
          <div>
            <i className="fa-solid fa-file"></i>Medical Formate
          </div>
          <div>
            <i className="fa-solid fa-file"></i>Dress Code
          </div>
          <div>
            <i className="fa-solid fa-file"></i>Anti Ragging
          </div>
          <div>
            <i className="fa-solid fa-file"></i>Fee Structure
          </div>
          <div>
            <i className="fa-solid fa-file"></i>Scholarships
          </div>
        </div>
      </section>
      <section aria-labelledby="contact" id="contact">
        <h2 id="contact-h2">
          <i className="fa fa-envelope"></i> Contact Me
        </h2>
        <form
          className="contact-form"
          action="https://formsubmit.co/newmail9472@gmail.com"
          method="POST"
          enctype="text/plain"
        >
          <input type="text" name="name" placeholder="Your Name" required="" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
          <input
            type="hidden"
            name="_next"
            value="https://xyzcode94.github.io/Portfolio/assest/pages/thankyou.html"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting me! I will get back to you soon."
          />
          <input
            type="hidden"
            name="_subject"
            value="New message from your web Development contact form"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_honeypot" value="myspamtrap" />
          <input type="text" name="myspamtrap" style={{display:"none"}} />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required=""
          ></textarea>
          <button type="submit" className="btn">
            <i className="fa fa-paper-plane"></i> Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Admission;
