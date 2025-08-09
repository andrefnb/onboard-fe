// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* ===== Navbar (Sticky) ===== */}
      <nav className="navbar">
        <div className="logo">OnBoard</div>
        <ul className="nav-links">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#breakTime">Break Time</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ===== Hero Section ===== */}
      <section id="welcome" className="section welcome">
        <div className="content">
          <h1>Welcome to OnBoard</h1>
          <p>Your journey starts here.</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>

      {/* ===== Destination Section ===== */}
      <section id="destination" className="section destination">
        <div className="content">
          <h2>Our Destination</h2>
          <p>Discover what makes us stand out.</p>
          <div className="feature-list">
            <div className="feature">🚀 Fast</div>
            <div className="feature">📱 Responsive</div>
            <div className="feature">⚙️ Customizable</div>
          </div>
        </div>
      </section>

      {/* ===== Collection Section ===== */}
      <section id="collection" className="section collection">
        <div className="content">
          <h2>Our Collection Highlights</h2>
          <div className="collection-cards">
            <div className="card">Basic - $9/mo</div>
            <div className="card">Pro - $29/mo</div>
            <div className="card">Enterprise - Contact Us</div>
          </div>
        </div>
      </section>

      {/* ===== Break Time Section ===== */}
      <section id="breakTime" className="section breakTime">
        <div className="content">
          <h2>Break Time</h2>
          <div className="breakTime-cards">
            <div className="card">Basic - $9/mo</div>
            <div className="card">Pro - $29/mo</div>
            <div className="card">Enterprise - Contact Us</div>
          </div>
        </div>
      </section>

      {/* ===== Location Section ===== */}
      <section id="location" className="section location">
        <div className="content">
          <h2>Location</h2>
          <div className="location-cards">
            <div className="card">Basic - $9/mo</div>
            <div className="card">Pro - $29/mo</div>
            <div className="card">Enterprise - Contact Us</div>
          </div>
        </div>
      </section>

      {/* ===== Staff Section ===== */}
      <section id="staff" className="section staff">
        <div className="content">
          <h2>Break Time</h2>
          <div className="staff-cards">
            <div className="card">Basic - $9/mo</div>
            <div className="card">Pro - $29/mo</div>
            <div className="card">Enterprise - Contact Us</div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="section contact">
        <div className="content">
          <h2>Contact Us!</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
