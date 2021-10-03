import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../Contexts/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div>
      <ul class="collection with-header">
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div class="container">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>No Books Yet</h4>
        </li>
      </ul>
    </div>
  );
};
export default BookList;
