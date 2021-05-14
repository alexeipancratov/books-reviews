import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}books`)
        .then((res) => res.json())
        .then((books) => setBooks(books));
  }, []);

  return (
    <>
      <h2>Books</h2>
      {books.map((b) => (
        <div className="card mb-5" key={b.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <Link to={`/books/${b.id}`}>
                <img
                  src={`images/${b.cover}`}
                  alt={b.title}
                  className="book-cover"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{b.title}</h5>
                <p className="card-text">{b.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
