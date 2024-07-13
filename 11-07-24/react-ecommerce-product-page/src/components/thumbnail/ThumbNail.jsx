import styles from "./ThumbNail.module.css";
import classNames from "classnames";

function ThumbNail({isSelected = "", thumbNail = "", handleSelect}) {
  return (
    <div className={classNames(styles.thumbNail, isSelected && styles.selected)}
    onClick={handleSelect}>

      <img src={thumbNail} />

      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  )
}

export default ThumbNail;
