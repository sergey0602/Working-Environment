import React from 'react';
import { string } from 'prop-types';
import { headerCenter } from './Header.scss';

const Header = (props) => {
  return (
    <header className={headerCenter}>
      {`Welcome to ${props.name} working environment`}
    </header>
  );
};

Header.propTypes = {
  name: string.isRequired,
};

export default Header;
