import React from 'react';
import ReactDOM from 'react-dom';
import './pages/demo/index.less';
import Admin from './admin';
import Life from './pages/demo/lifecycle'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin/>, document.getElementById('root'));
registerServiceWorker();