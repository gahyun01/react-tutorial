import React from "react";
import './HomeCard.css';

const HomeCard = ({ book }) => {
  return (
    <div key={book.id} className="card">
      <img className="img" src={book.coverImg} alt={book.name} />
      <div className="name">{book.name}</div>
      <div className="bookInfo">
        <div className="owner">{book.owner}</div>
        <div className="divider">{'|'}</div>
        <div className="category">{book.category}</div>
      </div>
    </div>
  );
}

export default HomeCard;