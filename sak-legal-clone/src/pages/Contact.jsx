import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaGavel
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    legalArea: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for contacting us! We will get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        legalArea: '',
        urgency: 'normal'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Address',
      details: [
        '123 Legal Street, Business District',
        'Mumbai, Maharashtra 400001',
        'Near High Court Complex'
      ]
    },
    {
      icon: <FaPhone />,
      title: 'Phone Numbers',
      details: [
        'Main Office: +91 98765 43210',
        'Direct Line: +91 98765 43211',
        'Emergency: +91 98765 43212'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Addresses',
      details: [
        'General: info@saklegalassociates.com',
        'Consultations: consult@saklegalassociates.com',
        'Support: support@saklegalassociates.com'
      ]
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Emergency Only'
      ]
    }
  ];

  const officeLocations = [
    {
      name: 'Mumbai Head Office',
      address: '123 Legal Street, Business District, Mumbai 400001',
      phone: '+91 98765 43210',
      specialties: ['Corporate Law', 'Civil Litigation', 'Real Estate Law']
    },
    {
      name: 'Pune Branch Office',
      address: '456 Law Avenue, Pune 411001',
      phone: '+91 98765 43213',
      specialties: ['Family Law', 'Property Disputes', 'Employment Law']
    },
    {
      name: 'Nashik Branch Office',
      address: '789 Justice Road, Nashik 422001',
      phone: '+91 98765 43214',
      specialties: ['Criminal Law', 'Consumer Protection', 'Tax Law']
    }
  ];

  const legalAreas = [
    'Corporate Law',
    'Civil Litigation',
    'Family Law',
    'Real Estate Law',
    'Criminal Law',
    'Employment Law',
    'Intellectual Property',
    'Tax Law',
    'Consumer Protection',
    'Other'
  ];

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact SAK Legal & Associates</h1>
            <p className="hero-subtitle">
              Get Expert Legal Advice and Representation
            </p>
            <p className="hero-description">
              We're here to help you navigate your legal challenges. Contact us today 
              for a consultation and let our experienced team provide the guidance you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              {submitMessage && (
                <div className="submit-message success">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="form-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="form-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone className="form-icon" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      <FaBuilding className="form-icon" />
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name (optional)"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="legalArea">
                      <FaGavel className="form-icon" />
                      Legal Area *
                    </label>
                    <select
                      id="legalArea"
                      name="legalArea"
                      value={formData.legalArea}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select legal area</option>
                      {legalAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="urgency">Priority Level</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                    >
                      <option value="low">Low Priority</option>
                      <option value="normal">Normal Priority</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your legal matter"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please provide details about your legal situation. The more information you provide, the better we can assist you."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations section">
        <div className="container">
          <div className="section-header">
            <h2>Our Office Locations</h2>
            <p>We have multiple offices to serve you better across Maharashtra</p>
          </div>
          
          <div className="locations-grid">
            {officeLocations.map((office, index) => (
              <div key={index} className="location-card">
                <h3>{office.name}</h3>
                <div className="location-info">
                  <p className="address">
                    <FaMapMarkerAlt className="location-icon" />
                    {office.address}
                  </p>
                  <p className="phone">
                    <FaPhone className="location-icon" />
                    {office.phone}
                  </p>
                </div>
                <div className="specialties">
                  <h4>Specialties:</h4>
                  <div className="specialty-tags">
                    {office.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us on Map</h2>
          <div className="map-container">
            <div className="map-placeholder">
              {/* This would be replaced with actual Google Maps integration */}
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <h3>SAK Legal & Associates</h3>
                <p>123 Legal Street, Business District</p>
                <p>Mumbai, Maharashtra 400001</p>
                <a 
                  href="https://maps.google.com/?q=Mumbai+Maharashtra+Legal+Office" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact section">
        <div className="container">
          <div className="emergency-content">
            <h2>Need Immediate Legal Assistance?</h2>
            <p>
              For urgent legal matters that require immediate attention, 
              our emergency hotline is available 24/7.
            </p>
            <div className="emergency-info">
              <div className="emergency-number">
                <FaPhone className="emergency-icon" />
                <div>
                  <span className="label">Emergency Hotline</span>
                  <a href="tel:+919876543212" className="number">+91 98765 43212</a>
                </div>
              </div>
              <div className="emergency-note">
                <p>
                  <strong>Note:</strong> Emergency consultation charges may apply. 
                  Our team will assess your situation and provide immediate guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;