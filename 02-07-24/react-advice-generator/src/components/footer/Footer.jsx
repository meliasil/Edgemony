import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.attribution}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Silvia Melia</a>.
      </div>
    </div>
  );
}

export { Footer };
