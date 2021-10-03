import React,{useContext} from "react";
import { BookContext } from "../Contexts/BookContext";

const Navbar=() =>{
    const {books} = useContext(BookContext)
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" class="brand-logo">
                        Book List
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html">{books.length} Books Added</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar