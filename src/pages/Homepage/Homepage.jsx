import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';

const Homepage = () => {
    const navigate = useNavigate();

    const handleRentVanClick = () => {
      navigate('/catalogue');
    };

  return (
    <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.header}>Welcome to our exciting world of adventure on wheels!</h1>
          <p  className={styles.descr}>
            Our mission is simple: to turn your transportation needs into
            seamless experiences. With a diverse fleet of vans in all shapes and
            sizes, we offer flexibility to match your unique requirements. From
            short-term rentals for spontaneous adventures to long-term
            arrangements for extended explorations, we've got you covered.
          </p>
          <p  className={styles.descr}>
            Need help choosing the
            right van? Want advice on the best routes and destinations? Our
            experts are here to assist you every step of the way.
          </p>
          <p  className={styles.descr}>
            So why wait? Dive into the excitement today and unlock the freedom
            of the open road with us. Your next unforgettable adventure awaits!
          </p>

          <button className={styles.button}  onClick={handleRentVanClick}>Rent a Van</button>
        </div>
       
    </div>
  );
};

export default Homepage;
