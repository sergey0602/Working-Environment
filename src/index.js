import React from 'react';
import { render } from 'react-dom';
import { App } from 'Containers';

import './common_styles/reset.scss';
import './common_styles/fonts.scss';

render(<App />, document.getElementById('root'));
module.hot.accept();
