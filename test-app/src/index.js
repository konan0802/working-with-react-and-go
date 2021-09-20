import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div>
          <h1>Hello, world!</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));