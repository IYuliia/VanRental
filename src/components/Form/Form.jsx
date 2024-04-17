import React, { useState } from 'react';
import styles from './Form.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} name='contactForm'>
      <h3 className={styles.heading}>Book your campervan now</h3>
      <p className={styles.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={styles.inputList}>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <input
          className={styles.input}
          type="date"
          id="bookingDate"
          name="bookingDate"
          value={formData.bookingDate}
          placeholder="Booking Date"
          onChange={handleChange}
        />

        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id="comment"
          name="comment"
          value={formData.comment}
          placeholder="Comment"
          onChange={handleChange}
        ></textarea>
      </div>
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
