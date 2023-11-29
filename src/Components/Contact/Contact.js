import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkedInLink from "../LinkedIn/LinkedIn";

const Contact = () => {
  const form = useRef(); // setting up emailjs from documentation

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvtdf24",
        "template_bcgg6wi",
        form.current,
        "zd6vxRWbnwt-VtMSd"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to contact me or find me on LinkedIn.
        </span>
        <LinkedInLink color="#cd853f" />
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
