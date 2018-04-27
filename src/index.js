import React from "react";
import ReactDOM from "react-dom";
import {hot} from 'react-hot-loader';

import ROUTER from './RouterConfig.jsx';

ReactDOM.render(
    (<ROUTER />),
    document.getElementById("container"));

export default hot(module)(ROUTER);
