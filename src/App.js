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

    this.state = {
      rooms: [
        {
          name: 'Bedroom #1',
          photos: [
            {
              source: require('./assets/bed1.jpg'),
              alt: 'Interior of bedroom one.'
            },
            {
              source: '../assets/bed1bath.jpg',
              alt: 'Bathroom located right next to bedroom one.'
            },
            {
              source: '../assets/bed1outside.jpg',
              alt: 'Enterance to bedroom one, including view of next-door bathroom.'
            }
          ],
          base_price: '39',
          bed_size: 'Queen',
          max_guests: 'Two',
          weekend_pricing: '44'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Specifics />
        <Amenities />
        <Body rooms={this.state.rooms} />
      </div>
    );
  }
}

export default App;
