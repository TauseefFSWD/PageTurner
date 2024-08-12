import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer";
import "./Home.css";
import {
  FaBookOpen,
  FaStar,
  FaNewspaper,
  FaGift,
  FaPen,
  FaGlobe,
  FaLaptop,
} from "react-icons/fa";
import bookCover1 from "../assets/1.jpg";
import bookCover2 from "../assets/2.jpg";
import bookCover3 from "../assets/3.jpg";
import bookCover4 from "../assets/4.jpg";
import bookCover5 from "../assets/5.jpg";
import bookCover6 from "../assets/6.jpg";
import bookCover7 from "../assets/7.jpg";
import bookCover8 from "../assets/8.jpg";
import bookCover9 from "../assets/9.jpg";
import bookCover10 from "../assets/10.jpg";
import bookCover11 from "../assets/11.jpg"; // Add more book covers
import bookCover12 from "../assets/12.jpg";
import bookCover13 from "../assets/13.jpg";
import bookCover14 from "../assets/14.jpg";
import bookCover15 from "../assets/15.jpg";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookClick = () => {
    navigate("/payment");
  };

  return (
    <div className="home-container">
      <Navbar /> {/* Add Navbar component here */}
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PageTurner</h1>
          <p className="text-red-600 text-bold">
            Your gateway to discovering the best books. Dive into our curated
            collections and explore new titles that will captivate your
            imagination.
          </p>
        </div>
      </header>
      {/* Featured Books Section */}
      <section className="featured-books">
        <h2 className="section-heading">Featured Books</h2>
        <div className="books-container">
          {[
            { src: bookCover1, title: "Book Title 1", price: "$19.99" },
            { src: bookCover2, title: "Book Title 2", price: "$22.99" },
            { src: bookCover3, title: "Book Title 3", price: "$15.99" },
            { src: bookCover4, title: "Book Title 4", price: "$18.99" },
          ].map((book, index) => (
            <div className="book-card" key={index} onClick={handleBookClick}>
              <img src={book.src} alt={book.title} className="book-cover" />
              <div className="book-info">
                <h3>{book.title}</h3>
                <span className="book-price">{book.price}</span>
                <button className="book-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* New Collections Section */}
      <section className="new-collections">
        <h2 className="section-heading">New Collections</h2>
        <div className="collections-container">
          {[
            {
              icon: <FaBookOpen />,
              title: "Adventure & Fantasy",
              description:
                "Explore new worlds and embark on thrilling adventures with our latest fantasy and adventure books.",
            },
            {
              icon: <FaStar />,
              title: "Best Sellers",
              description:
                "Discover the books that are topping the charts and gaining rave reviews from readers around the world.",
            },
            {
              icon: <FaNewspaper />,
              title: "New Releases",
              description:
                "Stay updated with the freshest releases and hottest new titles from your favorite authors.",
            },
            {
              icon: <FaGift />,
              title: "Gift Ideas",
              description:
                "Find the perfect book for your loved ones with our curated selection of great gift ideas.",
            },
          ].map((collection, index) => (
            <div className="collection-card" key={index}>
              {collection.icon}
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* More Book Sections */}
      <section className="book-sections">
        <h2 className="section-heading">More Books</h2>
        <div className="book-sections-container">
          <div className="book-section">
            <h3>Science Fiction</h3>
            <div className="books-container">
              {[
                { src: bookCover5, title: "Book Title 5", price: "$21.99" },
                { src: bookCover6, title: "Book Title 6", price: "$18.99" },
                { src: bookCover7, title: "Book Title 7", price: "$20.99" },
                { src: bookCover11, title: "Book Title 11", price: "$24.99" },
                { src: bookCover12, title: "Book Title 12", price: "$27.99" },
                { src: bookCover13, title: "Book Title 13", price: "$22.99" },
                { src: bookCover14, title: "Book Title 14", price: "$19.99" },
                { src: bookCover15, title: "Book Title 15", price: "$26.99" },
              ].map((book, bookIndex) => (
                <div
                  className="book-card"
                  key={bookIndex}
                  onClick={handleBookClick}
                >
                  <img src={book.src} alt={book.title} className="book-cover" />
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <span className="book-price">{book.price}</span>
                    <button className="book-button">Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="book-section">
            <h3>Historical Fiction</h3>
            <div className="books-container">
              {[
                { src: bookCover8, title: "Book Title 8", price: "$23.99" },
                { src: bookCover9, title: "Book Title 9", price: "$25.99" },
                { src: bookCover10, title: "Book Title 10", price: "$21.99" },
              ].map((book, bookIndex) => (
                <div
                  className="book-card"
                  key={bookIndex}
                  onClick={handleBookClick}
                >
                  <img src={book.src} alt={book.title} className="book-cover" />
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <span className="book-price">{book.price}</span>
                    <button className="book-button">Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="book-section">
            <h3>Technology & Science</h3>
            <div className="books-container">
              {[
                { src: bookCover6, title: "Book Title 11", price: "$24.99" },
                { src: bookCover7, title: "Book Title 12", price: "$27.99" },
                { src: bookCover8, title: "Book Title 13", price: "$22.99" },
              ].map((book, bookIndex) => (
                <div
                  className="book-card"
                  key={bookIndex}
                  onClick={handleBookClick}
                >
                  <img src={book.src} alt={book.title} className="book-cover" />
                  <div className="book-info">
                    <h3>{book.title}</h3>
                    <span className="book-price">{book.price}</span>
                    <button className="book-button">Buy Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Fun Stuff Section */}
      <section className="fun-stuff">
        <h2 className="section-heading">Fun Stuff</h2>
        <div className="fun-container">
          {[
            {
              icon: <FaPen />,
              title: "Book Reviews",
              description:
                "Check out our latest book reviews and recommendations.",
            },
            {
              icon: <FaGlobe />,
              title: "Author Interviews",
              description:
                "Read exclusive interviews with your favorite authors.",
            },
            {
              icon: <FaLaptop />,
              title: "Book-related Gadgets",
              description: "Explore gadgets that every book lover should have.",
            },
          ].map((item, index) => (
            <div className="fun-item" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
