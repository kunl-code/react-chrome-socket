import React from 'react';
import {render} from 'react-dom';

import App from './components/app/App';
import './index.css'

const anchor = document.createElement('div');
anchor.id = 'anchor';
anchor.className = 'Container';
anchor.style.display = "none";

document.body.insertBefore(anchor, document.body.childNodes[0]);



render(<App/>, document.getElementById('anchor'));


