import React from 'react';

const Reviews = ({book}) => {

    function submitHandler(e){
        e.preventDefault();
        const newReview = document.getElementById('floatingInput').value;
        console.log(newReview);
        book.reviews.push({id:book.reviews.length+1,review:newReview});
        fetch(`${process.env.REACT_APP_API_BASE_URL}books/${book.id}`,
        {method:'PUT',body:JSON.stringify(book),headers:{'Content-Type':'application/json; charset=UTF-8',}}
        ).then(response=>response.json());
        window.location.reload();
    }

    return ( 
        <>
            <div className='row'>
                {
                    book.reviews.map((r)=>{
                        return <p key={r.id} className="review-box">{r.review}</p>
                    })
                }
            </div>
            <div className="input-group mb-3">
                <textarea className="form-control text-input" id="floatingInput" placeholder="your comments" aria-describedby="button-addon2"/>
                <button className="input-group-text" onClick={submitHandler}>Submit</button>
            </div>
        
        </>
    );
}

export default Reviews;