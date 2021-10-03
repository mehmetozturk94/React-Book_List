import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div class="container">
      <ul class="collection with-header" onClick={() => dispatch({type : 'DELETE_BOOK', id:book.id})}>
        <li class="collection-header">
          <h4>{book.title}</h4>
        </li>
        <li class="collection-item">
          <div>
            {book.author}
            <a class="secondary-content">
              <i class="material-icons">Delete</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default BookDetails;
