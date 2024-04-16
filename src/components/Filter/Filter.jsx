import React from 'react';
import styles from './Filter.module.css';
import { ReactComponent as ACIcon } from '../../icons/ac.svg';
import { ReactComponent as AutomaticIcon } from '../../icons/automatic.svg';
import { ReactComponent as KitchenIcon } from '../../icons/kitchen.svg';
import { ReactComponent as TVIcon } from '../../icons/tv.svg';
import { ReactComponent as ShowerIcon } from '../../icons/shower_wc.svg';
import { ReactComponent as VanIcon } from '../../icons/van.svg';
import { ReactComponent as FIIcon } from '../../icons/fully_integrated.svg';
import { ReactComponent as AlcoveIcon } from '../../icons/alcove.svg';

const Filter = () => {
  return (
    <div>
      <p className={styles.label}>Filters</p>
      <h2 className={styles.heading}>Vehicle equipment</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <ACIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>AC</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <AutomaticIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Automatic</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <KitchenIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Kitchen</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <TVIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>TV</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <ShowerIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Shower</span>
          </div>
        </li>
      </ul>
      <h2 className={styles.heading}>Vehicle type</h2>
      <ul className={styles.ul}>
      <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <VanIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Van</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <FIIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Fully integrated</span>
          </div>
        </li>
        <li className={styles.li}>
          <div className={styles.iconWrapper}>
            <AlcoveIcon className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.span}>Alcove</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
