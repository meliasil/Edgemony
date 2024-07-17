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
                <a className="font-bold text-lime-400"href={item.path}>{item.name}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;
