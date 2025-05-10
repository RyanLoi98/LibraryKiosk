import React from "react";

const CheckoutItem = ({ book, onRemove }) => {
  console.log(book);
  return (
    <div className="checkout-item">
      <img
        className="checkout-book-image"
        src={book.image}
        alt={book.title + "Book Cover"}
      />
      <div className="checkout-item-description">
        <h1 className="checkout-book-title">{book.title}</h1>
        <ul>
          {book.descriptions.map((desc, index) => (
            <li key={index} className="checkout-list-description">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout-remove-item-div">
        <button className="checkout-remove-item-btn" onClick={onRemove}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
