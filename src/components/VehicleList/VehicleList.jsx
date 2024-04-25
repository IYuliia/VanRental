import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite, setShowModal, setSelectedVehicle, setCurrentPage, loadFavouritesFromLS, initializeFavourites } from '../../store/vehiclesSlice/slice.js';
import { fetchVehiclesThunk } from '../../store/vehiclesSlice/thunks.js';
import styles from './VehicleList.module.css';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton';
import Modal from '../../components/Modal/Modal';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import { ReactComponent as StarIcon } from '../../icons/star_yellow.svg';
import { ReactComponent as LocationIcon } from '../../icons/map-pin.svg';
import { ReactComponent as RedHeartIcon } from '../../icons/heart_red.svg';
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

const VehicleList = () => {
  const dispatch = useDispatch();
  const { items: vehicles, isLoading, loadMoreVisible, showModal, selectedVehicle, favourites, currentPage, pageSize } = useSelector(state => state.vehicles);
  
  useEffect(() => {
    const favourites = loadFavouritesFromLS();
    dispatch(initializeFavourites(favourites));
    dispatch(fetchVehiclesThunk());
    dispatch(setCurrentPage(1));
  }, [dispatch]); 
  
  const visibleVehicles = vehicles.slice(0, currentPage * pageSize);

  const loadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
 
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

  return (

    <div>
      <ul className={styles.ul}>
        {visibleVehicles.map(vehicle => (
          <li className={styles.li} key={vehicle._id}>
            <div className={styles.card}>
              <img
                className={styles.img}
                src={vehicle.gallery[0]}
                alt={vehicle.name}
              />
              <div className={styles.info}>
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
                <p className={styles.descr}>{vehicle.description}</p>
                <ul className={styles.detailsList}>
                  {Object.entries(vehicle.details)
                    .filter(([key, value]) => value > 0)
                    .slice(0, 6)
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
                <ShowMoreButton onClick={() => handleShowModal(vehicle)} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isLoading && (
        <p>Loading...</p>
      )}

      {loadMoreVisible && !isLoading && visibleVehicles.length >= pageSize && visibleVehicles.length < vehicles.length && (
        <div className={styles.loadMoreButtonContainer}>
          <LoadMoreButton onClick={loadMore} />
        </div>
      )}

      {showModal && (
        <Modal vehicle={selectedVehicle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default VehicleList;
