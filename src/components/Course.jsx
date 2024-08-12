import React from "react";
import "./Course.css"; // Import the CSS file for styling
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "./Navbar";
import Footer from "./Footer";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";
import c from "../assets/3.jpg";
import d from "../assets/4.jpg";
import e from "../assets/5.jpg";
import f from "../assets/6.jpg";
import g from "../assets/7.jpg";
import h from "../assets/8.jpg";
import i from "../assets/9.jpg";
import j from "../assets/10.jpg";
import bookCover11 from "../assets/11.jpg"; // Add more book covers
import bookCover12 from "../assets/12.jpg";
import bookCover13 from "../assets/13.jpg";
import bookCover14 from "../assets/14.jpg";
import bookCover15 from "../assets/15.jpg";
// Sample data for 10 books
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$15.99",
    image: a,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "$12.99",
    image: b,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$14.99",
    image: c,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "$13.99",
    image: d,
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$11.99",
    image: e,
  },
  {
    id: 6,
    title: "Moby-Dick",
    author: "Herman Melville",
    price: "$16.99",
    image: f,
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    price: "$19.99",
    image: g,
  },
  {
    id: 8,
    title: "The Odyssey",
    author: "Homer",
    price: "$17.99",
    image: h,
  },
  {
    id: 9,
    title: "Ulysses",
    author: "James Joyce",
    price: "$18.99",
    image: i,
  },

  {
    id: 10,
    title: "Latest",
    author: "Dante Alighieri",
    price: "$20.99",
    image: j,
  },
  {
    id: 11,
    title: "From New",
    author: "Danju",
    price: "$21.99",
    image: bookCover11,
  },
  {
    id: 12,
    title: "New Book",
    author: "Ahieri",
    price: "$22.99",
    image: bookCover12,
  },
  {
    id: 13,
    title: "Book 1",
    author: "Daeri",
    price: "$24.99",
    image: bookCover13,
  },
  {
    id: 14,
    title: "Book",
    author: "Dante ",
    price: "$10.99",
    image: bookCover14,
  },
  {
    id: 15,
    title: "The Divine Comedy",
    author: " Alighieri",
    price: "$20.99",
    image: bookCover15,
  },
];

const Course = () => {
  return (
    <div>
      <Navbar />
      <div className="course-container">
        <h1>Available Books</h1>
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <h2>{book.title}</h2>
              <p className="author">by {book.author}</p>
              <p className="price">{book.price}</p>
              <button className="buy-button">
                <Link
                  to="/payment"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Buy
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
