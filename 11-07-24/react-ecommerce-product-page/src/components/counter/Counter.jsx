import IconMinus from "../icons/IconMinus";
import IconPlus from "../icons/IconPlus";
import IconCart from "../icons/iconCart";
import Button from "../button/Button";
import styles from "./Counter.module.css";
import classNames from "classnames";



function Counter() {

  return (
    <div className={styles.container}>
      <p>SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <div className={styles.priceDiscount}>
      <h2>$ 125.00</h2>
      <div className={styles.discount}><p>50%</p></div>
      </div>
      <p className={styles.prevPrice}>$250.00</p>
      <div className={styles.counterAdd}>
    <div className={classNames(styles.counter)}>
      <button>
        <IconMinus/>
      </button>
      <div>0</div>
      <button>
        <IconPlus />
        </button>
        </div>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"/>
      </Button>
      </div>
    </div>
    
  )
}

export default Counter;
