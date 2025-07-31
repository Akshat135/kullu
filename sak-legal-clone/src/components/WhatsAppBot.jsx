import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './WhatsAppBot.css';

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);

  // Your WhatsApp number (replace with actual number)
  const whatsappNumber = '+919876543210'; // Replace with your actual WhatsApp number

  useEffect(() => {
    // Show greeting when chat is opened for the first time
    if (isOpen && !hasGreeted) {
      const currentHour = new Date().getHours();
      let greeting;
      
      if (currentHour < 12) {
        greeting = "Good Morning! 🌅";
      } else if (currentHour < 17) {
        greeting = "Good Afternoon! ☀️";
      } else {
        greeting = "Good Evening! 🌆";
      }

      const welcomeMessage = {
        id: Date.now(),
        text: `${greeting}\n\nWelcome to SAK Legal & Associates! 👋\n\nI'm here to help you with any legal inquiries. How can I assist you today?\n\n📞 For urgent matters, call: ${whatsappNumber}\n💼 Free consultation available!`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory([welcomeMessage]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted, whatsappNumber]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat history
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMessage]);

    // Create WhatsApp URL with the message
    const whatsappMessage = encodeURIComponent(
      `Hello SAK Legal & Associates,\n\n${message}\n\n---\nSent from your website chat`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Add bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your message! 📩\n\nI've redirected you to WhatsApp where our team will respond promptly.\n\n⚡ Expected response time: Within 30 minutes during business hours.\n\n🕒 Business Hours:\nMon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);

    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickMessages = [
    "I need legal consultation",
    "What are your service charges?",
    "I want to book an appointment",
    "Emergency legal assistance needed"
  ];

  const handleQuickMessage = (quickMsg) => {
    setMessage(quickMsg);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className={`whatsapp-float ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="whatsapp-icon">
          {isOpen ? <FaTimes /> : <FaWhatsapp />}
        </div>
        {!isOpen && (
          <div className="whatsapp-notification">
            <span>Chat with us!</span>
          </div>
        )}
      </div>

      {/* WhatsApp Chat Window */}
      {isOpen && (
        <div className="whatsapp-chat">
          <div className="whatsapp-header">
            <div className="header-info">
              <div className="avatar">
                <FaWhatsapp />
              </div>
              <div className="contact-info">
                <h4>SAK Legal & Associates</h4>
                <span className="status">
                  <span className="status-dot"></span>
                  Online now
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="whatsapp-body">
            <div className="chat-messages">
              {chatHistory.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-content">
                    <p>{msg.text}</p>
                    <span className="timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Messages */}
            {chatHistory.length <= 1 && (
              <div className="quick-messages">
                <p className="quick-title">Quick options:</p>
                {quickMessages.map((quickMsg, index) => (
                  <button
                    key={index}
                    className="quick-message-btn"
                    onClick={() => handleQuickMessage(quickMsg)}
                  >
                    {quickMsg}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="whatsapp-footer">
            <div className="input-group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
                className="message-input"
              />
              <button 
                className="send-btn" 
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
            <p className="footer-text">
              Messages will be forwarded to WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppBot;