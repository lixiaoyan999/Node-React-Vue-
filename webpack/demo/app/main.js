/*
let greet = require('./greeter');
document.querySelector('#app').appendChild(greet());*/

import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './greeter';
import Button from './button.jsx';

import Imgs from './images.jsx';

ReactDom.render(<div><Greeter/><Button/><Imgs /></div>,document.querySelector('#app'))