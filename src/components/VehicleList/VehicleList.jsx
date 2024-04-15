import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton';
import React, { useEffect, useState } from 'react';
import { fetchVehiclesApi } from '../../api/vehicles';
import styles from './VehicleList.module.css';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Modal from '../../components/Modal/Modal';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [visibleVehicles, setVisibleVehicles] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVehiclesApi();
        setVehicles(data);
        setVisibleVehicles(data.slice(0, 4));
        if (data.length > 4) {
          setLoadMoreVisible(true);
        }
      } catch (error) {
        console.error('Error fetching vehicles data:', error);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    const nextIndex = visibleVehicles.length + 4;
    setVisibleVehicles(vehicles.slice(0, nextIndex));
    if (nextIndex >= vehicles.length) {
      setLoadMoreVisible(false);
    }
  };

  const handleShowModal = vehicle => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                  <p className={styles.price}>€{vehicle.price}</p>
                </div>
                <div className={styles.additional}>
                  <p className={styles.rating}>{vehicle.rating}</p>
                  <p className={styles.location}>{vehicle.location}</p>
                </div>
                <p className={styles.descr}>{vehicle.description}</p>
                <ul className={styles.detailsList}>
                  {Object.entries(vehicle.details)
                    .filter(([key, value]) => value > 0)
                    .slice(0, 6)
                    .map(([key, value]) => (
                      <li className={styles.details} key={key}>
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
      <div className={styles.loadMoreButtonContainer}>
        {loadMoreVisible && <LoadMoreButton onClick={loadMore} />}
      </div>
      {showModal && (
        <Modal vehicle={selectedVehicle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default VehicleList;
