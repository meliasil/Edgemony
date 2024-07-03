import styles from "./form.module.css";
import { useState } from "react";


const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);
      // Puoi aggiungere qui la logica per inviare i dati del form a un server
    };
  
    return (
      <div className={styles.formContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h1>Contact Us</h1>
          <div className={styles.formGroup}>
            <label>
              First Name *
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name *
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Email Address *
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Query Type *
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="queryType"
                    value="General Enquiry"
                    checked={formData.queryType === 'General Enquiry'}
                    onChange={handleChange}
                    required
                  />
                  General Enquiry
                </label>
                <label>
                  <input
                    type="radio"
                    name="queryType"
                    value="Support Request"
                    checked={formData.queryType === 'Support Request'}
                    onChange={handleChange}
                    required
                  />
                  Support Request
                </label>
              </div>
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              Message *
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              I consent to being contacted by the team *
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;