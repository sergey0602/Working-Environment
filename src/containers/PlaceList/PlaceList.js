import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaces } from 'Actions';
import { PlaceButton } from 'Components';
import styles from './PlaceList.scss';

export function PlaceList() {
  const dispatch = useDispatch();
  const { data } = useSelector(reduxStore => reduxStore.places);

  React.useEffect(() => {
    dispatch(getPlaces());
  }, []);

  const places = data.map(item => (
    <PlaceButton
      key={item.place}
      isBooked={item.isBooked}
      content={item.place}
    />
  ));

  return (<div className={styles.placeWrapper}>{places}</div>);
}
