import {NavLink} from "react-router-dom";

const menuList = [
    {name: "Home", path: "/"},
    {name: "Cart", path: "cart"},
    
];

function NavBar() {
  return (
    <nav className="flex item-center justify-between py-2 px-4 bg-green-700">
      <h1 className="font-bold text-lime-400">E-Commerce</h1>
      <ul className="flex gap-4">
        {menuList.map((item, index) => (
            <li key={index}>
                <NavLink className={({isActive}) => `${isActive ? "underline" : ""} font-bold text-lime-400`} to={item.path}>{item.name}</NavLink>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;
