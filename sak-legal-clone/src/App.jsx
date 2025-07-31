import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BlogSystem from './components/BlogSystem'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import WhatsAppBot from './components/WhatsAppBot'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <BlogSystem />
        <ReviewsSection />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  )
}

export default App
