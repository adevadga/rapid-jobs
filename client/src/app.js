import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import DetailView from './components/DetailView';
import NavigationItems from './components/NavigationItems';
import Recruiters from './components/Recruiters';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header />
        <NavigationItems />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jobs" component={HomePage} />
        <Route exact path="/recruiters" component={Recruiters} />
        <Route exact path="/job/:jobId" component={DetailView} />
      </div>
    );
  }
}

export default App;
