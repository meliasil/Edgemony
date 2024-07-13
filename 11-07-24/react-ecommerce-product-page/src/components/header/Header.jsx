import styles from "./Header.module.css";
import classNames from "classnames";

function Header() {
  return (
    <div className={classNames(styles.container)}>
        <ListItem />
    </div>
  )
}




function ListItem() {
  return (
    <>
    <h1>sneakers</h1>
    <a href="#">Collections</a>
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <div className={classNames(styles.iconimg)}>
        <a href="#"><img className={classNames(styles.iconCart)} src="./src/assets/images/icons/icon-cart.svg" alt="cart" /></a>
        <a href="#"><img className={classNames(styles.avatar)} src="./src/assets/images/icons/image-avatar.png" alt="avatar" /></a>
    
    </div>
    </>
  )
}








export default Header;
