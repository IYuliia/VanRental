// import { NavLink } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <NavLink end to="/" className={styles.link} activeclassname={styles.activeLink}>
//             Home
//           </NavLink>
//         </li>
//         <li className={styles.item}>
//           <NavLink end to="/catalogue" className={styles.link} activeclassname={styles.activeLink}>
//             Catalogue
//           </NavLink>
//         </li>
//         <li className={styles.item}>
//           <NavLink end to="/favourites" className={styles.link} activeclassname={styles.activeLink}>
//             Favourites
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
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

