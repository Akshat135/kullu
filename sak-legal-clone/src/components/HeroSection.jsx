import React, { useState, useEffect } from 'react';
import { FaPlay, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Excellence in Legal Representation',
      subtitle: 'Your Trusted Legal Partners Since 1995',
      description: 'We provide comprehensive legal solutions for individuals and businesses with decades of experience and a commitment to achieving the best outcomes for our clients.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Protecting Your Rights & Interests',
      subtitle: 'Dedicated Legal Advocacy',
      description: 'Our team of experienced attorneys is committed to providing personalized legal representation tailored to your unique needs and circumstances.'
    },
    {
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      title: 'Strategic Legal Solutions',
      subtitle: 'Results-Driven Approach',
      description: 'We combine legal expertise with strategic thinking to deliver effective solutions that protect your interests and advance your goals.'
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Background Slides */}
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <div className={`hero-content-wrapper ${isVisible ? 'visible' : ''}`}>
                <h1 className="hero-title">
                  {heroSlides[currentSlide].title}
                </h1>
                <h2 className="hero-subtitle">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="hero-description">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="hero-actions">
                  <a href="#consultation" className="btn btn-primary hero-btn">
                    <FaPhone className="btn-icon" />
                    Free Consultation
                  </a>
                  <a href="#about" className="btn btn-secondary hero-btn">
                    Learn More
                    <FaArrowRight className="btn-icon" />
                  </a>
                </div>

                <div className="hero-contact-info">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>info@saklegalassociates.com</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Cases Won</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;