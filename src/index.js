import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './common_styles/reset.scss';
import './common_styles/fonts.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
