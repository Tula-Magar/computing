import React, { useState } from "react";
import "./contact.css";
export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <React.Fragment>
      <h1 className="Title">Contact</h1>
      <div className="contact_info">
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            viewBox="0 0 64 64"
          >
            <path
              fill="#222"
              d="M32.12,52.61c.81,0,3.41-1.08,7.13-4.52,5.91-5.44,12.81-15,12.81-24a20.06,20.06,0,0,0-40.12,0C11.94,38.23,28.41,52.31,32.12,52.61ZM32,12.14a9.56,9.56,0,1,1-9.56,9.56A9.57,9.57,0,0,1,32,12.14ZM53.8,54.49c0,1.87-7.69,5.5-21.8,5.5s-21.8-3.63-21.8-5.5c0-1.25,3.6-3.57,11.62-4.77a1.34,1.34,0,0,0,.4-.13c3.76,3.55,7.44,5.83,9.66,6h.28c3,0,7.37-3.69,9.13-5.31.22-.2.44-.42.66-.64a2,2,0,0,0,.23.06C50.2,50.92,53.8,53.24,53.8,54.49Z"
            />
          </svg>
          <div>
            <span>Address: </span>
            1000 Merrimack St, <br /> Manchester, NH 03101
          </div>
        </div>
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            viewBox="0 0 64 64"
          >
            <g data-name="Layer 3">
              <path d="M60,31.81a1,1,0,0,1-1-1C59,16.57,47.75,5,33.89,5a1,1,0,1,1,0-2C48.84,3,61,15.48,61,30.83A1,1,0,0,1,60,31.81Z" />
              <path d="M49.1 31.81a1 1 0 0 1-1-1A14.46 14.46 0 0 0 33.89 16.17a1 1 0 0 1 0-2 16.43 16.43 0 0 1 16.2 16.62A1 1 0 0 1 49.1 31.81zM55 52.83a19.93 19.93 0 0 1-5.31 6.6A7.25 7.25 0 0 1 44 60.9c-9.07-1.54-18-5.52-26.91-14.28-8.51-9.13-12.5-18.45-14-27.76A7.74 7.74 0 0 1 4.52 13 19.51 19.51 0 0 1 11 7.5a2.61 2.61 0 0 1 3.78 0l8.81 9.15a3.11 3.11 0 0 1 0 4.24l-6.24 6.77C20 33.47 29.79 43.55 35.41 46.27L42 39.84a2.91 2.91 0 0 1 4.12 0l8.9 9A2.81 2.81 0 0 1 55 52.83z" />
            </g>
          </svg>
          <div>
            <span>Phone: </span>
            603-***-****
          </div>
        </div>
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            viewBox="0 0 512 512"
          >
            <path d="M67 148.7c11 5.8 163.8 89.1 169.5 92.1 5.7 3 11.5 4.4 20.5 4.4s14.8-1.4 20.5-4.4c5.7-3 158.5-86.3 169.5-92.1 4.1-2.1 11-5.9 12.5-10.2 2.6-7.6-.2-10.5-11.3-10.5H65.8c-11.1 0-13.9 3-11.3 10.5 1.5 4.4 8.4 8.1 12.5 10.2z" />
            <path d="M455.7 153.2c-8.2 4.2-81.8 56.6-130.5 88.1l82.2 92.5c2 2 2.9 4.4 1.8 5.6-1.2 1.1-3.8.5-5.9-1.4l-98.6-83.2c-14.9 9.6-25.4 16.2-27.2 17.2-7.7 3.9-13.1 4.4-20.5 4.4s-12.8-.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2L110.7 338c-2 2-4.7 2.6-5.9 1.4-1.2-1.1-.3-3.6 1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1-8.8-4.5-9.3.8-9.3 4.9v205c0 9.3 13.7 20.9 23.5 20.9h371c9.8 0 21.5-11.7 21.5-20.9v-205c0-4.2.6-9.4-8.3-4.9z" />
          </svg>
          <div>
            <span>Email: </span>
            <a href="mailto:tmagar1996@gmail.com"> tmagar1996@gmail.com </a>
          </div>
        </div>
        <div className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="50px"
            viewBox="0 0 92 92"
          >
            <path d="M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z" />
          </svg>

          <div>
            <span>Website: </span>
            <a
              href="https://techcomputinginfo.com/"
              target="_blank"
              rel="noreferrer"
            >
              www.techcomputinginfo.com
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.466072339868!2d-71.464349784103!3d42.989519679149566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24f270851538d%3A0xdcf84c40a1dc8acc!2sPublic%20Defender%20Program!5e0!3m2!1sen!2sus!4v1654733581448!5m2!1sen!2sus"
            className="map-iframe"
            title="TitleInReact"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="forms">
          {submitting && <div className="submit_message">Submtting .....</div>}
          <form className="formform" onSubmit={handleSubmit}>
            <fieldset className="email_form">
              <label className="fullname">
                <p>Full Name</p>
                <input className="input_fullname" name="name" />
              </label>
              <label className="email">
                <p>Email</p>
                <input className="input_email" name="name" />
              </label>
              <label className="subject">
                <p>Subject</p>
                <input className="input_subject" name="name" />
              </label>
              <label className="message">
                <p>Message</p>
                <textarea className="input_message" name="name" />
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
