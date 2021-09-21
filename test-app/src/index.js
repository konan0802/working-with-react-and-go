import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppContent from './AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component {

  render() {
    const myProps = {
      title: "Cool App!!",
      subject: "My Subject",
      favorite_color: "red",
      
    }

    return (
      <div className="app">
        <AppHeader {...myProps} />
        <AppContent />
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