import React, { useEffect, useState } from "react";
import Reviews from "./Reviews";
export default function BookDetails({match}) {
    const [book,setBook] = useState({reviews:[]});
    const {id} = match.params;
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}books/${id}`)
            .then((res) => res.json())
            .then((book) => setBook(book));
    }, [id]);
    
    return (
        <>
            <h2>Book Details</h2>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                    src={`../images/${book.cover}`}
                    alt={book.title}
                    className="book-cover"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.description}</p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className='container-fluid'>
                        <Reviews book={book}/>
                    </div>
                </div>
            </div>
        </>
    );
}
