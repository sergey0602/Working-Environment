import React from 'react';
import { string } from 'prop-types';
import styles from './Header.scss';

const Header = (props) => {
  return (
    <header className={styles.headerCenter}>
      {`Welcome to ${props.name} working environment`}
    </header>
  );
};

Header.propTypes = {
  name: string.isRequired,
};

export default Header;
