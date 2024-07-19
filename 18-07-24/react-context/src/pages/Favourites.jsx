import { useContext } from "react";
import { BookContext } from "../providers/BookContext";

function Favourites() {
  const { books } = useContext(BookContext);

  return (
    <div>
      <ul>
        {books.map((book) => {
          return (
            <li className="flex flex-col justify-center items-center gap-5 font-bold bg-green-100 p-32 box-border">
              <h1 className="text-green-900 text-xl">"{book.title}"</h1>
              <p className="text-green-900">{book.author}</p>
              <p className="text-green-900">{book.year}</p>
              <button className="bg-lime-400 p-4 rounded-full text-sm font-bold">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favourites;
