import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6phm4ar",
        "template_zcxds5a",
        form.current,
        "blaHt_5KIJ711DfGH"
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
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="clientDesc">
          You can contact me via LinkedIn or below
        </span>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
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
          <div className="links">
            <img src={linkedin} alt="linkedin" className="link" />
            <img src={github} alt="GitHub" className="link" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
