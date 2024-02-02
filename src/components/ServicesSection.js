import React from 'react';
import '../styles/ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-card explore">
        <h1>Explore</h1>
        <h3>Experience the world, your way.</h3>
        <p>
          Embark on a journey of discovery with Orpheus.
          Our travel experts will guide you to the world's best experiences, ensuring an unforgettable trip.<br /><br />

          Whether you're looking to immerse yourself in new cultures, sample local cuisine, or simply relax, we'll help you plan the perfect adventure tailored to your interests and needs.
          From bustling cities to remote destinations, we have options to suit every traveler.<br /><br />

          Join Orpheus on a journey of discovery and experience the world your way.
        </p>
        <hr />
      </div>
      <div className="services-card customize">
        <h1>Customize</h1>
        <h3 className="customize">Make your trip one-of-a-kind.</h3>
        <p className="customize">
          Create the perfect trip tailored to your interests and needs with Orpheus.
          Our travel specialists will work with you every step of the way to ensure a trip that is everything you've always wanted.<br /><br />

          From romantic getaways to cultural immersions, our experts will help you turn your vision into a reality.
          We'll choose the best accommodations, activities, and destinations to suit your style, budget, and interests.<br /><br />

          Make your trip one-of-a-kind and create memories that will last a lifetime with Orpheus.
        </p>
        <hr />
      </div>
      <div className="services-card adventure">
        <h1>Adventure</h1>
        <h3>EMBARK ON A THRILLING JOURNEY.</h3>
        <p>
          Live your wildest travel dreams with Orpheus.
          Our adventure packages are designed for thrill-seekers who want to experience the world in a whole new way.<br /><br />

          From extreme sports to scenic hikes, we offer a range of adrenaline-fueled experiences that will leave you feeling exhilarated.
          Whether you're a seasoned adventurer or taking your first steps, we have options to suit you.<br /><br />

          Join us on an adventure that will test your limits and leave you with memories you'll never forget. Live your wildest dreams with Orpheus.
        </p>
        <hr className="customize" />
      </div>
    </section>
  );
}

export default ServicesSection;