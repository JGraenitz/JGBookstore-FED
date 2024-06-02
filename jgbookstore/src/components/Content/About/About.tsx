import React from 'react';
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="aboutUs">
      <h2>About Us</h2>
      <div className="aboutContent">
        <p>
          Welcome to JGBookstore! We are passionate about books and aim to bring the best collection to our readers. 
          Established in 2020, we have grown to become a trusted name in the book industry.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to inspire and nurture a love for reading by providing a diverse range of books to readers of all ages.
          We believe in the power of books to transform lives and strive to make reading accessible to everyone.
        </p>
        <h3>Our Team</h3>
        <p>
          Our team consists of avid readers, experienced book curators, and dedicated customer service representatives.
          We work tirelessly to ensure that your experience with us is nothing short of excellent.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have any questions? Feel free to reach out to us at <a href="mailto:contact@jgbookstore.com">contact@jgbookstore.com</a>. We'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;