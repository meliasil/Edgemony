import styles from "./form.module.css";
import { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleButton = () => {
    console.log("clickato");
  };

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titlesub}>
          <h1 className={styles.title}>Mortgage Calculator</h1>
          <a className={styles.subtitle} href="#" onClick={reloadPage}>
            Clear All
          </a>
        </div>
        <div className="mortgage-amount">
          <h3>Mortgage Amount</h3>
          <form className={styles.amountform}>
            <label className={styles.label}>£</label>
            <input
              className={styles.amount}
              name="amount"
              onChange={handleChange}
            />
          </form>
        </div>
        <div className={styles.mortgageterminteresttitles}>
          <h3>Mortgage Term</h3>
          <h3>Interest Rate</h3>
        </div>
        <div className={styles.mortgageterminterestinput}>
          <form className={styles.termform}>
            <input
              className={styles.term}
              name="term"
              onChange={handleChange}
            />
            <label className={styles.label}>years</label>
          </form>

          <form className={styles.interestform}>
            <input
              className={styles.interest}
              name="interest"
              onChange={handleChange}
            />
            <label className={styles.label}>%</label>
          </form>
        </div>
        <h3>Mortgage Type</h3>

        <div className={styles.querytype}>
          <div className={styles.repaymentinput}>
            <input
              className={styles.repayment}
              placeholder="Repayment"
              type="radio"
              id="repayment"
              name="tag"
              value="repayment"
              checked
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.onlyinput}>
            <input
              className={styles.only}
              placeholder="Interest Only"
              type="radio"
              id="repayment"
              name="tag"
              value="repayment"
              checked
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.buttoncontainer}>
            <button onClick={handleButton}>
              <label className={styles.buttonlabel}>Calculate Repayments</label>
            </button>
          </div>
          </div>
      </div>
      <div className={styles.containerdx}>
        <div className={styles.resultstext}>
            <h2>Your Results</h2>
            <h3>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</h3>
            </div>
            <div className={styles.resultcontainer}>
              <div className={styles.resultcontent}>
                <h2>Your monthly repayment</h2>         
            <p className={styles.inputtext}>{input.amount}</p>
            <p className={styles.inputtext}>{input.term}</p>
            <p className={styles.inputtext}>{input.interest}</p>
            </div>
            </div>
          </div>
    </div>
    
  );
}



export default Form;
