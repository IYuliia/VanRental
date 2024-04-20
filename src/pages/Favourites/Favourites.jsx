import Modal from '../../components/Modal/Modal.jsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal, setSelectedVehicle, toggleFavourite } from '../../store/vehiclesSlice/slice.js';
import styles from './Favourites.module.css';
import { ReactComponent as LocationIcon } from '../../icons/map-pin.svg';
import { ReactComponent as StarIcon } from '../../icons/star_yellow.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import { ReactComponent as RedHeartIcon } from '../../icons/heart_red.svg';

const Favourites = () => {
  const dispatch = useDispatch();

  const { items: vehicles,  showModal, selectedVehicle, favourites } = useSelector(state => state.vehicles);
  

  const handleToggleFavourite = vehicleId => {
    dispatch(toggleFavourite(vehicleId));
  };

  const handleShowModal = vehicle => {
    dispatch(setSelectedVehicle(vehicle));
    dispatch(setShowModal(true));
  };
  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  const favouriteVehicles = vehicles.filter(vehicle => favourites.includes(vehicle._id));

  return (
    <div className={styles.card}>
      <h1>Favourite Vehicles</h1>
      <ul className={styles.ul}>
        {favouriteVehicles.map(vehicle => (
          <li key={vehicle._id}  className={styles.li}>
          <div key={vehicle._id} className="card" onClick={() => handleShowModal(vehicle)}>
          
            {/* <div className="card-details"> */}
              {/* <h2 className={styles.heading}>{vehicle.name}</h2>
              <p  className={styles.price}>€{vehicle.price}</p> */}
              <div className={styles.headline}>
                  <h1 className={styles.heading}>{vehicle.name}</h1>
                  <div className={styles.end}>
                  <p className={styles.price}>€{vehicle.price}</p>
                  {favourites.includes(vehicle._id) ? (
                      <RedHeartIcon className={styles.heartIcon} onClick={() => handleToggleFavourite(vehicle._id)} />
                    ) : (
                      <HeartIcon className={styles.heartIcon} onClick={() => handleToggleFavourite(vehicle._id)} />
                    )}
                  </div>
                </div>
              <div className={styles.additional}>
                <StarIcon className={styles.starIcon} />
                  <p className={styles.rating}>{vehicle.rating}({vehicle.reviews.length} Reviews)</p>
                  <LocationIcon className={styles.locationIcon} />
                  <p className={styles.location}>{vehicle.location}</p>
                </div>
                <img src={vehicle.gallery[0]} alt={vehicle.name} className={styles.img} />
            {/* </div> */}
          </div>
            {/* <button onClick={() => handleShowModal(vehicle)}>{vehicle.name}</button> */}
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal vehicle={selectedVehicle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Favourites;
