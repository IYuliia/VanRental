import ContactForm from '../../components/Form/Form';
import React from 'react';
import styles from './Features.module.css';
import { ReactComponent as AirConIcon } from '../../icons/aircon.svg';
import { ReactComponent as ToilerPaperIcon } from '../../icons/toilet_paper.svg';
import { ReactComponent as KitchenIcon } from '../../icons/kitchen.svg';
import { ReactComponent as BedIcon } from '../../icons/bed.svg';
import { ReactComponent as TVIcon } from '../../icons/tv.svg';
import { ReactComponent as CDIcon } from '../../icons/CD.svg';
import { ReactComponent as RadioIcon } from '../../icons/radio.svg';
import { ReactComponent as ShowerIcon } from '../../icons/shower_wc.svg';
import { ReactComponent as ToiletIcon } from '../../icons/toilet_paper.svg';
import { ReactComponent as FreezerIcon } from '../../icons/freezer.svg';
import { ReactComponent as HobIcon } from '../../icons/hob.svg';
import { ReactComponent as MicrowaveIcon } from '../../icons/microwave.svg';
import { ReactComponent as GasIcon } from '../../icons/gas.svg';
import { ReactComponent as WaterIcon } from '../../icons/water.svg';

const Features = ({ vehicle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <ul className={styles.detailsList}>
          {Object.entries(vehicle.details)
            .filter(([key, value]) => value > 0)
            .map(([key, value]) => (
              <li className={styles.details} key={key}>
                {key === 'airConditioner' && <AirConIcon className={styles.detailsIcon}/>}
                        {key === 'bathroom' && <ToilerPaperIcon className={styles.detailsIcon} />}
                        {key === 'kitchen' && <KitchenIcon className={styles.detailsIcon} />}
                        {key === 'beds' && <BedIcon className={styles.detailsIcon} />}
                        {key === 'TV' && <TVIcon className={styles.detailsIcon} />}
                        {key === 'CD' && <CDIcon className={styles.detailsIcon} />}
                        {key === 'radio' && <RadioIcon className={styles.detailsIcon} />}
                        {key === 'shower' && <ShowerIcon className={styles.detailsIcon} />}
                        {key === 'toilet' && <ToiletIcon className={styles.detailsIcon} />}
                        {key === 'freezer' && <FreezerIcon className={styles.detailsIcon} />}
                        {key === 'hob' && <HobIcon className={styles.detailsIcon} />}
                        {key === 'microwave' && <MicrowaveIcon className={styles.detailsIcon} />}
                        {key === 'gas' && <GasIcon className={styles.detailsIcon} />}
                        {key === 'water' && <WaterIcon className={styles.detailsIcon} />}
                {value === 1 ? key : `${key}: ${value}`}
              </li>
            ))}
        </ul>

        <h2 className={styles.heading}>Vehicle details</h2>
        <ul>
          <li className={styles.descr}>Form: {vehicle.form}</li>
          <li className={styles.descr}>Length: {vehicle.length}</li>
          <li className={styles.descr}>Width: {vehicle.width}</li>
          <li className={styles.descr}>Height: {vehicle.height}</li>
          <li className={styles.descr}>Tank: {vehicle.tank}</li>
          <li className={styles.descr}>Consumption: {vehicle.consumption}</li>
        </ul>
      </div>
      <div className={styles.rightColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Features;
