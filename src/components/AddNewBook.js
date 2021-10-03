import React, { useState, useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const AddNewBook = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK',book : {
        title, author
    }})
    setTitle("");
    setAuthor("");
  };

  return (
    <div class="row">
      <form class="col s12" onSubmit={handleSubmit}>
        <div class="container">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                class="validate"
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
              <input
                id="author"
                placeholder="Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                class="validate"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="submit"
                value={"Add Book"}
                type="submit"
                class="validate"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddNewBook;
