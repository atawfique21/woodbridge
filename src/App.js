import React from 'react';
import Header from './components/header'
import Landing from './components/landing'
import Body from './components/body'
import Amenities from './components/amenities'
import Specifics from './components/specifics'
import './App.scss';


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Specifics />
        <Amenities />
        <Body />
      </div>
    );
  }
}

export default App;
