import {NavLink} from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../providers/BookContext";

const menuList = [
    {name: "Catalogue", path: "/"},
    {name: "Favourites", path: "favourites"},
    
];

function NavBar() {

  const {books}= useContext(BookContext)


  return (
    <nav className="flex item-center justify-between py-2 px-4 bg-green-700">
      <h1 className="font-bold text-lime-400">Book List</h1>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
            <li key={index}>
                <NavLink className={({isActive}) => `${isActive ? "underline" : ""} font-bold text-lime-400`} to={item.path}>{item.name}</NavLink>
            </li>
        ))}
      </ul>
      <div className="bg-lime-400 p-3 flex justify-center items-center font-bold">Books added: {books.length}</div>
    </nav>
  )
}

export default NavBar;
