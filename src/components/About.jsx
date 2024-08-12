import React from "react";
import "./About.css";
import { FaBook, FaUsers, FaShieldAlt, FaGlobe, FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-header">
          <h1>About PageTurner</h1>
          <p className="about-intro">
            At <strong>PageTurner</strong>, we're more than just a
            bookstore—we're a haven for book lovers. Our mission is to make
            every reading experience unforgettable, with expertly curated
            collections, personalized recommendations, and a vibrant community.
          </p>
        </div>

        <div className="about-content">
          <h2>Our Expertise</h2>
          <div className="skills-container">
            <div className="skill-card">
              <FaBook className="skill-icon" />
              <h3>Curated Collections</h3>
              <p>
                Dive into our handpicked collections, carefully selected by our
                literary experts to ensure you find the perfect book for every
                mood and moment.
              </p>
            </div>

            <div className="skill-card">
              <FaUsers className="skill-icon" />
              <h3>Personalized Recommendations</h3>
              <p>
                Our recommendation engine understands your tastes, helping you
                discover new favorites based on your unique reading habits.
              </p>
            </div>

            <div className="skill-card">
              <FaShieldAlt className="skill-icon" />
              <h3>Secure & Convenient Shopping</h3>
              <p>
                Enjoy peace of mind with our secure payment process and a
                seamless shopping experience tailored to your needs.
              </p>
            </div>

            <div className="skill-card">
              <FaGlobe className="skill-icon" />
              <h3>Global Community</h3>
              <p>
                Connect with book lovers from around the world. Share reviews,
                join discussions, and be part of our global literary community.
              </p>
            </div>

            <div className="skill-card">
              <FaHeart className="skill-icon" />
              <h3>Passion for Books</h3>
              <p>
                Our passion for literature drives us to offer the best selection
                of books and the highest level of service to our customers.
              </p>
            </div>
          </div>

          <h2>Our Mission</h2>
          <p className="about-mission">
            We believe in the transformative power of books. Our mission at
            PageTurner is to make literature accessible, enjoyable, and
            enriching for everyone. Join us as we explore new ideas, discover
            amazing stories, and build a community of readers.
          </p>

          <h2>Our Values</h2>
          <div className="values-container">
            <div className="value-card">
              <h3>Quality</h3>
              <p>
                We strive for excellence in everything we do, from the books we
                offer to the service we provide.
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                Trust is the foundation of our relationship with our readers. We
                operate with transparency and honesty in all our dealings.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We continuously seek new ways to enhance your reading
                experience, embracing the latest technologies and trends.
              </p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>
                We foster a strong community of readers, encouraging connections
                and shared experiences through the love of books.
              </p>
            </div>
            <div className="value-card">
              <h3>Passion</h3>
              <p>
                Our passion for books is the heart of PageTurner. We are
                committed to sharing that passion with our readers.
              </p>
            </div>
          </div>

          <h2>Join Us on Our Journey</h2>
          <p className="about-join">
            PageTurner is your gateway to a world of literary exploration.
            Whether you're here to find your next great read or to connect with
            fellow book enthusiasts, we're excited to have you on this journey
            with us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
