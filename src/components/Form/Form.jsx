import React, { useState } from 'react';
import styles from './Form.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const [notification, setNotification] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.name && formData.email && formData.bookingDate) {
      setNotification('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
      });

      setTimeout(() => {
        setNotification('');
      }, 3000);
    } else {
      setNotification('All fields are required!');
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
          min={getCurrentDate()} 
          onChange={handleChange}
          required
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
      {!notification && (
  <button className={styles.button} type="submit">
    Send
  </button>
)}
{notification && <div className={styles.notification}>{notification}</div>}
    </form>
  );
};

export default ContactForm;
