import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      review: 'SAK Legal & Associates provided exceptional service during my property purchase. Their attention to detail and thorough documentation process gave me complete confidence. Highly recommended for real estate matters!',
      case: 'Property Purchase',
      date: '2024-01-20',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Pune, Maharashtra',
      rating: 5,
      review: 'The team at SAK Legal handled my divorce case with great sensitivity and professionalism. They guided me through every step and ensured my rights were protected. Excellent family law expertise.',
      case: 'Family Law Matter',
      date: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Vikram Patel',
      location: 'Nashik, Maharashtra',
      rating: 5,
      review: 'Outstanding corporate law services! SAK Legal helped us with company incorporation and compliance matters. Their expertise saved us both time and money. Professional and reliable team.',
      case: 'Corporate Law Services',
      date: '2024-01-10',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Anita Desai',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      review: 'I was facing a complex civil litigation case and SAK Legal & Associates handled it brilliantly. Their strategic approach and dedication led to a favorable outcome. Truly grateful for their support.',
      case: 'Civil Litigation',
      date: '2024-01-05',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Suresh Mehta',
      location: 'Thane, Maharashtra',
      rating: 5,
      review: 'Excellent service for our business legal requirements. The team is knowledgeable, responsive, and always available for consultation. They have become our trusted legal partners.',
      case: 'Business Legal Consultation',
      date: '2023-12-28',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Deepika Singh',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      review: 'SAK Legal helped me with employment law issues when I faced workplace discrimination. Their expertise and support gave me the confidence to fight for my rights. Highly professional team.',
      case: 'Employment Law',
      date: '2023-12-25',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star filled' : 'star'}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="reviews-section section" id="reviews">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>See what our clients say about our legal services and expertise</p>
        </div>

        <div className="reviews-container">
          <div className="reviews-carousel">
            <button className="carousel-btn prev-btn" onClick={prevReview}>
              <FaChevronLeft />
            </button>

            <div className="review-card-container">
              <div className="review-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                
                <div className="review-content">
                  <div className="rating">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  
                  <p className="review-text">
                    "{reviews[currentReview].review}"
                  </p>
                  
                  <div className="review-meta">
                    <div className="client-info">
                      <img 
                        src={reviews[currentReview].avatar} 
                        alt={reviews[currentReview].name}
                        className="client-avatar"
                      />
                      <div className="client-details">
                        <h4 className="client-name">{reviews[currentReview].name}</h4>
                        <span className="client-location">{reviews[currentReview].location}</span>
                        <span className="case-type">{reviews[currentReview].case}</span>
                      </div>
                    </div>
                    <div className="review-date">
                      {formatDate(reviews[currentReview].date)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="carousel-btn next-btn" onClick={nextReview}>
              <FaChevronRight />
            </button>
          </div>

          {/* Review Indicators */}
          <div className="review-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentReview ? 'active' : ''}`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>

          {/* Review Stats */}
          <div className="review-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="reviews-cta">
          <h3>Share Your Experience</h3>
          <p>We value your feedback and would love to hear about your experience with our legal services</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Leave a Review</a>
            <a href="#consultation" className="btn btn-secondary">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;