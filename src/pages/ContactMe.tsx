import React from 'react';
import './ContactMe.css';
import profilePic from '../images/Himanshu.jpeg'; // Replace with your actual image if needed
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const name = 'Himanshu Patel';
  const title = 'TPM';
  const summary = "I'm passionate about solving complex problems with cloud and agile methodologies.";
  const company = 'Old Dominion University';
  const email = 'Himanshup012@gmail.com';
  const phone = 'Your Phone Number'; // Optional
  const linkedin = 'https://www.linkedin.com/in/hpatel012';

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt={name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{name}</h3>
          <p className="badge-title">{title}</p>
          <p className="badge-description">{summary}</p>
          <p className="badge-company">{company}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${email}`} className="contact-link">{email}</a>
        </div>
        {/* Uncomment if you want to include phone number */}
        {/* <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${phone}`} className="contact-link">{phone}</a>
        </div> */}
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
