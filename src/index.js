// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();




import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter as Router}  from 'react-router-dom';
import App from './App';

ReactDOM.render(
<Router>
    <App/>
</Router>,document.getElementById('root'));