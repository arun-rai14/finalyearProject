import React from 'react';
import './Home.css'; // Import the CSS file here

function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <header>
        <h1>Welcome to MarketMaster Dashboard</h1>
        <p>Your one-stop solution for enhancing your online presence.</p>
      </header>
      <section>
        <h2>Features</h2>
        <ul>
          <li>AI-powered website generation</li>
          <li>Intuitive drag-and-drop interface</li>
          <li>Comprehensive SEO tools</li>
        </ul>
      </section>
      <footer>
        <p>© 2024 MarketMaster Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

