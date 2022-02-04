import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_portfolio_page",
        "template_f2s6r5l",
        formRef.current,
        "user_IN8zFEek4kLVtkYJl7Lw9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-left">
        <img src="assets/email-3.jpeg" alt="" />
      </div>
      <div className="contact-right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input type="text" placeholder="Email" name="user_email" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Send</button>
          {message && (
            <span>
              😄 Thanks for reaching out! Will respond as soon as possible
              (usually within 48 hours).
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
