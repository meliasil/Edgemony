import classNames from "classnames";
import styles from "./App.module.css";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import IconCart from "./components/icons/iconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";



function App() {
  
  return (
    <>
    <Header />
    <div className={classNames(styles.main)}>
    <ProductLightBox />
    <Counter />
    </div>

    </>
  )
    
  
}

export default App
