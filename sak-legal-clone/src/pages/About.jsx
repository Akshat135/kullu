import React from 'react';
import { FaUsers, FaCertificate, FaHandshake, FaGavel, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Advocate K. R. Saklikar',
      position: 'Senior Partner & Founder',
      education: 'LL.B., Mumbai University',
      experience: '25+ Years',
      specialization: 'Corporate Law, Civil Litigation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      bio: 'With over 25 years of legal experience, K.R. Saklikar has established himself as one of Mumbai\'s most respected legal practitioners. He specializes in corporate law and has successfully handled numerous high-profile cases.'
    },
    {
      id: 2,
      name: 'Advocate Amit Saklikar',
      position: 'Partner',
      education: 'LL.M., Government Law College',
      experience: '15+ Years',
      specialization: 'Real Estate Law, Property Disputes',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      bio: 'Amit brings modern legal practices and innovative solutions to complex real estate matters. His expertise in property law has helped hundreds of clients navigate successful transactions.'
    },
    {
      id: 3,
      name: 'Advocate Pallavi Saklikar',
      position: 'Partner',
      education: 'LL.B., Pune University',
      experience: '12+ Years',
      specialization: 'Family Law, Women\'s Rights',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      bio: 'Pallavi is passionate about family law and women\'s rights. Her empathetic approach combined with strong legal acumen has made her a trusted advocate for sensitive family matters.'
    },
    {
      id: 4,
      name: 'Advocate Durgaprasad Sabnis',
      position: 'Senior Associate',
      education: 'LL.B., Mumbai University',
      experience: '10+ Years',
      specialization: 'Criminal Law, Employment Law',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face',
      bio: 'Durgaprasad specializes in criminal defense and employment law. His meticulous preparation and courtroom skills have earned him recognition among peers and clients alike.'
    }
  ];

  const values = [
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our professional dealings and client relationships.'
    },
    {
      icon: <FaGavel />,
      title: 'Excellence',
      description: 'We strive for excellence in every case, ensuring the best possible outcomes for our clients.'
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric',
      description: 'Our clients\' needs and interests are at the center of everything we do.'
    },
    {
      icon: <FaCertificate />,
      title: 'Expertise',
      description: 'Our team brings deep knowledge and specialized expertise across various areas of law.'
    }
  ];

  const achievements = [
    { number: '1000+', label: 'Cases Successfully Resolved' },
    { number: '500+', label: 'Satisfied Clients' },
    { number: '25+', label: 'Years of Combined Experience' },
    { number: '98%', label: 'Success Rate' }
  ];

  const milestones = [
    {
      year: '1995',
      title: 'Firm Establishment',
      description: 'K.R. Saklikar established the firm with a vision to provide comprehensive legal services.'
    },
    {
      year: '2005',
      title: 'Partnership Expansion',
      description: 'Amit and Pallavi joined as partners, expanding our expertise in real estate and family law.'
    },
    {
      year: '2010',
      title: 'Corporate Law Division',
      description: 'Launched dedicated corporate law division to serve growing business clientele.'
    },
    {
      year: '2015',
      title: '500 Cases Milestone',
      description: 'Successfully resolved over 500 legal cases across various practice areas.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Embraced digital tools and online consultations to better serve clients.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Continuing to expand our services and maintain our reputation for excellence.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About SAK Legal & Associates</h1>
            <p className="hero-subtitle">
              Excellence in Legal Representation Since 1995
            </p>
            <p className="hero-description">
              For over 25 years, SAK Legal & Associates has been a trusted name in legal services, 
              providing comprehensive solutions to individuals and businesses across Maharashtra. 
              Our commitment to excellence, integrity, and client satisfaction has made us one of 
              the region's most respected law firms.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                SAK Legal & Associates was founded in 1995 by Advocate K.R. Saklikar with a simple 
                yet powerful vision: to provide exceptional legal services that protect our clients' 
                interests while upholding the highest standards of professional integrity.
              </p>
              <p>
                What started as a small practice has grown into a full-service law firm, handling 
                everything from complex corporate transactions to sensitive family matters. Our growth 
                has been driven by our unwavering commitment to our clients and our reputation for 
                achieving favorable outcomes.
              </p>
              <p>
                Today, we continue to build on our founder's legacy, combining traditional legal 
                expertise with modern approaches to serve our clients better than ever before.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&w=600&h=400&fit=crop" 
                alt="Our law office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide our practice and define our commitment to our clients</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Experienced legal professionals dedicated to serving your needs</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <div className="member-details">
                    <p><strong>Education:</strong> {member.education}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Specialization:</strong> {member.specialization}</p>
                  </div>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements section">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our firm's growth and development</p>
          </div>
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <h2>Why Choose SAK Legal & Associates?</h2>
              <div className="choose-points">
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Proven Track Record</h4>
                    <p>Over 1000 successfully resolved cases with a 98% success rate</p>
                  </div>
                </div>
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Experienced Team</h4>
                    <p>25+ years of combined legal experience across various practice areas</p>
                  </div>
                </div>
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Client-Centric Approach</h4>
                    <p>Personalized attention and tailored legal strategies for each client</p>
                  </div>
                </div>
                <div className="choose-point">
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <h4>Comprehensive Services</h4>
                    <p>Full spectrum of legal services under one roof</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose-testimonial">
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p>
                  "SAK Legal & Associates has been our trusted legal partner for over 10 years. 
                  Their expertise, professionalism, and dedication to our success have been 
                  invaluable to our business growth."
                </p>
                <div className="testimonial-author">
                  <strong>Rajesh Kumar</strong>
                  <span>CEO, Kumar Industries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work with Us?</h2>
            <p>
              Experience the difference that dedicated legal representation can make. 
              Contact us today for a consultation.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/consultation" className="btn btn-secondary">Free Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;