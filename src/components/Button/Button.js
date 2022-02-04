import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import styles from './Button.scss';
//
// const useStyles = makeStyles({
//   free: {},
// });

export function PlaceButton(props) {
  const className = props.isBooked ? styles.booked : styles.free;

  return (
    <Button classes={{ label: className }}>{props.content}</Button>
  );
}

PlaceButton.propTypes = {
  isBooked: PropTypes.bool.isRequired,
  content: PropTypes.number.isRequired,
};
