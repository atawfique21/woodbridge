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
              source: require('./assets/bed1bath.jpg'),
              alt: 'Bathroom located right next to bedroom one.'
            },
            {
              source: require('./assets/bed1outside.jpg'),
              alt: 'Enterance to bedroom one, including view of next-door bathroom.'
            }
          ],
          base_price: 39,
          bed_size: 'Queen',
          max_guests: 'Two',
        },
        {
          name: 'Bedroom #2',
          photos: [
            {
              source: require('./assets/bed2.jpg'),
              alt: 'Interior of bedroom two.'
            },
            {
              source: require('./assets/bed2closet.jpg'),
              alt: 'Closet located in room two.'
            },
            {
              source: require('./assets/bed1bath.jpg'),
              alt: 'Bathroom located right next to bedroom two.'
            }
          ],
          base_price: 29,
          bed_size: 'Full',
          max_guests: 'One',
        },
        {
          name: 'Bedroom #3',
          photos: [
            {
              source: require('./assets/bed3_arial.jpg'),
              alt: 'Interior of bedroom three.'
            },
            {
              source: require('./assets/bed3.jpg'),
              alt: 'Arial view of bedroom three.'
            },
            {
              source: require('./assets/bed1bath.jpg'),
              alt: 'Bathroom located very close to bedroom three.'
            }
          ],
          base_price: 39,
          bed_size: 'Queen',
          max_guests: 'Two',
        },
        {
          name: 'Bedroom #4',
          photos: [
            {
              source: require('./assets/bed4.jpg'),
              alt: 'Interior of bedroom four.'
            },
            {
              source: require('./assets/bed4outside.jpg'),
              alt: 'View of hallway located outside of bedroom four, featuring double/him and her sinks.'
            },
            {
              source: require('./assets/livingroom.jpg'),
              alt: 'Living room located down the stairs from bedroom four.'
            }
          ],
          base_price: 50,
          bed_size: 'Queen',
          max_guests: 'Two',
        },
        {
          name: 'Bedroom #5',
          photos: [
            {
              source: require('./assets/bed5.jpg'),
              alt: 'Interior of bedroom five.'
            },
            {
              source: require('./assets/bed4outside.jpg'),
              alt: 'View of hallway located outside of bedroom five, featuring double/him and her sinks.'
            },
            {
              source: require('./assets/livingroom.jpg'),
              alt: 'Living room located down the stairs from bedroom five.'
            }
          ],
          base_price: 40,
          bed_size: 'Queen',
          max_guests: 'Two',
        },
        {
          name: 'Bedroom #6',
          photos: [
            {
              source: require('./assets/bed6.jpg'),
              alt: 'Interior of bedroom one.'
            },
            {
              source: require('./assets/bed4outside.jpg'),
              alt: 'View of hallway located outside of bedroom six, featuring double/him and her sinks.'
            },
            {
              source: require('./assets/livingroom.jpg'),
              alt: 'Living room located down the stairs from bedroom six.'
            }
          ],
          base_price: 39,
          bed_size: 'Double',
          max_guests: 'Two',
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
