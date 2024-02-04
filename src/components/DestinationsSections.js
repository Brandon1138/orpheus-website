import React from 'react';
import '../styles/DestinationsSection.css';
import DestinationCard from './DestinationCard';

function DestinationsSection() {
  return (
    <section className="destinations-section">
      <h1>Destinations</h1>
      <h3>Discover the wrold, one adventure at a time</h3>
      <p>Explore the most stunning destinations around the world with Orpheus. From tropical beaches to snow-capped mountains, we have hand-picked the best destinations for you to make your next trip unforgettable. Browse through our 9 featured destinations and book your next adventure with just a click!</p>
      <button className="cta-button">Get Started</button>
      <div className="destinations-grid">
        {/* Add DestinationCard components here */}
      </div>
    </section>
  );
}

export default DestinationsSection;