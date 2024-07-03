import styles from "./card.module.css";

import React, { useState } from "react";

function Card(props) {
  const { quotes } = props;
  const [currentItem, setCurrentItem] = useState(quotes[0]);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentItem(quotes[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <CardItem item={currentItem} onButtonClick={handleButtonClick} />
    </div>
  );
}

function CardItem(props) {
  const { item = {}, onButtonClick } = props;

  return (
    <div className={styles.content}>
      <h1 className={styles.titlecard}>ADVICE #{item.id}</h1>
      <p>{item.quote}</p>
      <img src="./pattern-divider-desktop.svg" alt="pattern-desktop" />
      <button className={styles.cardbutton} onClick={onButtonClick}>
        <img src="./icon-dice.svg" alt="icon" />
      </button>
    </div>
  );
}

export { Card };
