import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4700bq",
        "template_109p1mf",
        formRef.current,
        "Erb6rrrqT1DPJhfrG"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
          setShowForm(false);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div>
      <Navbar />

      <div className="video-section" id="home" data-aos="fade-up">
       <video
  className="background-video"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
>
  <source src="/bpovideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>



        <div className="hero-content">
          <h1>Empowering Businesses with Smart BPO Solutions</h1>
          <p>
            NexAn Global Services helps you streamline operations, boost customer
            satisfaction, and scale your business efficiently.
          </p>
        </div>
      </div>

      <div className="image_Bpo" data-aos="fade-right">
        <div className="image-section">
          <img
            src="https://enchanting-dusk-b08bd0.netlify.app/pics/bpo6.png"
            alt="BPO"
          />
        </div>
        <div className="text-section">
          <h2>Your Trusted BPO Partner</h2>
          <p>
            At NexAn Global Services, we specialize in delivering reliable,
            scalable, and efficient business process outsourcing solutions. <br />
            ✔Inbound & Outbound Call Support <br />
            ✔ Data Entry & Processing <br />
            ✔ 24/7 Customer Service Our expert team ensures seamless communication
            and data handling, so you can focus on growing your business.
          </p>
        </div>
      </div>

      <div className="why" id="about" data-aos="fade-up">
        <h1>
          <b>Why Choose NexAn?</b>
        </h1>
        <p>Discover how our tailored BPO solutions can help elevate your business.</p>
        <div className="cards">
          <p>
            <b>✔ Proven Track Record in BPO Operations</b>
          </p>
          <p>
            <b>✔ Highly Trained & Scalable Workforce</b>
          </p>
          <p>
            <b>✔ Cutting-edge Infrastructure & Security</b>
          </p>
          <p>
            <b>✔ Dedicated Account Management</b>
          </p>
          <p>
            <b>✔ Real-Time Reporting and Transparency</b>
          </p>
          <p>
            <b>✔ Flexible & Cost-effective Solutions</b>
          </p>
        </div>
      </div>

      <div className="industry" data-aos="fade-left">
        <h1>
          <b>Industries We Serve</b>
        </h1>
        <div className="float">
          <p>Healthcare</p>
          <p>E-Commerce</p>
          <p>Banking & Finance</p>
          <p>Telecom</p>
          <p>Education</p>
          <p>Real Estate</p>
        </div>
      </div>

      <div className="numbers" data-aos="zoom-in">
        <div>
          <h1>
            <b>150+</b>
          </h1>
          <p>Clients Worldwide</p>
        </div>
        <div>
          <h1>
            <b>1200+</b>
          </h1>
          <p>Projects Completed</p>
        </div>
        <div>
          <h1>
            <b>24/7</b>
          </h1>
          <p>Hours of Support</p>
        </div>
        <div>
          <h1>
            <b>10+</b>
          </h1>
          <p>Years Experience</p>
        </div>
      </div>

      <div className="what_0"  data-aos="fade-up">
        <h1>
          <b>What Our Clients Say</b>
        </h1>
      </div>

      <div className="what" data-aos="fade-up">
        <div className="boxes">
          <div className="profile">
            <img
              src="https://enchanting-dusk-b08bd0.netlify.app/pics/testimonial1.jpg"
              alt="Amit Sharma"
            />
            <div className="info">
              <h1>Amit Sharma</h1>
              <p>CEO, TechCore Solutions</p>
            </div>
          </div>
          <p>
            <i>
              “NexAn has streamlined our customer support process with precision.
              Their team is professional, reliable, and incredibly efficient.”
            </i>
          </p>
        </div>

        <div className="boxes">
          <div className="profile">
            <img
              src="https://enchanting-dusk-b08bd0.netlify.app/pics/testimonial2.jpg"
              alt="Sophia Allen"
            />
            <div className="info">
              <h1>Sophia Allen</h1>
              <p>Operations Head, MediPlus</p>
            </div>
          </div>
          <p>
            <i>
              “Their data entry and call support teams are outstanding. We've
              improved our turnaround time and customer satisfaction
              significantly.”
            </i>
          </p>
        </div>

        <div className="boxes">
          <div className="profile">
            <img
              src="https://enchanting-dusk-b08bd0.netlify.app/pics/testimonial3.jpg"
              alt="Rajiv Mehta"
            />
            <div className="info">
              <h1>Rajiv Mehta</h1>
              <p>Managing Director, EduBridge</p>
            </div>
          </div>
          <p>
            <i>
              “From onboarding to execution, NexAn exceeded our expectations.
              They are more than just a service provider — they’re a growth
              partner.”
            </i>
          </p>
        </div>
      </div>

      <div id="services" className="services-section" data-aos="fade-up">

        <h2>Our BPO Services</h2>
        <p className="services-description">
          Scalable and expert-driven outsourcing to accelerate your business goals.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Customer Support</h3>
            <p>
              24/7 inbound and outbound call handling to enhance your customer
              satisfaction.
            </p>
          </div>
          <div className="service-card">
            <h3>Data Entry & Processing</h3>
            <p>Accurate data entry, cleansing, and processing for all business needs.</p>
          </div>
          <div className="service-card">
            <h3>CRM Management</h3>
            <p>Seamless customer relationship management to improve retention.</p>
          </div>
          <div className="service-card">
            <h3>Virtual Assistance</h3>
            <p>Skilled virtual assistants to handle your administrative tasks remotely.</p>
          </div>
          <div className="service-card">
            <h3>Lead Generation</h3>
            <p>High-quality lead generation services to boost your sales pipeline.</p>
          </div>
          <div className="service-card">
            <h3>Back Office Support</h3>
            <p>Efficient handling of back-end operations including billing, HR, and more.</p>
          </div>
        </div>
      </div>

      <div className="contact-section" id="contact" data-aos="fade-up">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have a question about
            services, pricing, or anything else—our team is ready to answer all
            your questions.
          </p>
          <ul>
            <li>📧 info@nexanglobal.com</li>
            <li>📞 1234 567 89</li>
            <li>📍 Kanpur</li>
          </ul>
        </div>

        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
<footer className="footer" data-aos="fade-up">
        <div className="footer-container">
          <div className="footer-section about">
            <h2>NexAn</h2>
            <p>
              Your trusted partner in Business Process Outsourcing. We deliver
              efficient, scalable, and customized solutions worldwide.
            </p>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="socials">
              <li>🌐 Facebook</li>
              <li>🐦 Twitter</li>
              <li>📸 Instagram</li>
              <li>🔗 LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">© 2025 NexAn Global Services. All rights reserved.</div>
      </footer>
      {/* Optional: Button to trigger modal contact form */}
      {/* 
      <button className="open-modal-btn" onClick={() => setShowForm(true)}>
        Contact Us
      </button>

      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.stopPropagation();
              sendEmail(e);
            }}
            className="form-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Contact Us</h2>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="close-btn"
            >
              Close
            </button>
          </form>
        </div>
      )}
      */}
    </div>
  );
}

export default App;
