import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as AlcoveIcon } from '../../icons/alcove.svg';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" >
        <AlcoveIcon width='32' height='32' />
      </NavLink>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink 
            to="/catalogue" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Catalogue
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink 
            to="/favourites" 
            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

