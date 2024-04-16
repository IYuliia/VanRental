import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
        {/* <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div> */}
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/catalogue" className={styles.link}>
            Catalogue
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/favourites" className={styles.link}>
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;