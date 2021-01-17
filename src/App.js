import React from 'react';
import Header from './components/header'
import Landing from './components/landing'
import Body from './components/body'
import Attractions from './components/attractions'
import Section from './components/sectionHeader'
import Faq from './components/faq'
import About from './components/about'
import './App.scss';
import { gapi } from 'gapi-script';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      attractions: [
        {
          source: require('./assets/browns.jpg'),
          title: 'FirstEnergy Stadium',
          caption: 'Go see a Browns Game!',
          alt: 'Browns game with fans cheering.'
        },
        {
          source: require('./assets/zoo.jpg'),
          title: 'Cleveland Metroparks Zoo',
          caption: 'Featuring over 3,000 animals!',
          alt: 'Lion from the Cleveland Metroparks Zoo looking into the camera.'
        },
        {
          source: require('./assets/westsidemarket.jpg'),
          title: 'Westside Market',
          caption: 'From fresh pastries to pasta to produce!',
          alt: 'Pastries from vendor inside of westside market.'
        },
        {
          source: require('./assets/aquarium.jpg'),
          title: 'Cleveland Aquarium',
          caption: 'More than 1,400 fresh and salt water animals!',
          alt: 'Woman touching stingray as it passes by.'
        }
      ],
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
          link: 'https://www.airbnb.com/rooms/28538147?s=67&unique_share_id=803b402b-2ef9-4096-a6b4-ae6b265f2fff'
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
          link: 'https://www.airbnb.com/rooms/31385446?s=67&unique_share_id=81b624d5-4826-402d-869b-7967dea57eea'
        },
        {
          name: 'Bedroom #3',
          photos: [
            {
              source: require('./assets/bed3_new.jpg'),
              alt: 'Interior of bedroom three.'
            },
            {
              source: require('./assets/bed3closet_new.jpg'),
              alt: 'Closet view of bedroom three.'
            },
            {
              source: require('./assets/bed3outside_new.jpg'),
              alt: 'Hallway leading to bedroom 3.'
            },
            {
              source: require('./assets/bed1bath.jpg'),
              alt: 'Bathroom located very close to bedroom three.'
            }
          ],
          base_price: 39,
          bed_size: 'Queen',
          max_guests: 'Two',
          link: 'https://www.airbnb.com/rooms/29704660?s=67&unique_share_id=2227bf67-758a-4d47-b168-a0496a4ccd02'
        },
        {
          name: 'Bedroom #4',
          photos: [
            {
              source: require('./assets/bed4_new.jpg'),
              alt: 'Interior of bedroom four.'
            },
            {
              source: require('./assets/bed4alt_new.png'),
              alt: 'Alternative view of the interior of bedroom four.'
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
          link: 'https://www.airbnb.com/rooms/26238736?s=67&unique_share_id=23fc5a22-f1c5-4815-a2f9-1cbbe81c8cea'
        },
        {
          name: 'Bedroom #5',
          photos: [
            {
              source: require('./assets/bed5_new.JPG'),
              alt: 'Interior of bedroom five.'
            },
            {
              source: require('./assets/bed5closet_new.JPG'),
              alt: 'Alternate view of Room 5, including a deeper look into the closet.'
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
          link: 'https://www.airbnb.com/rooms/21390430?s=67&unique_share_id=5124a3a9-23c0-461f-87cc-4ebf560e4a29'
        },
        {
          name: 'Bedroom #6',
          photos: [
            {
              source: require('./assets/bed6_new.jpg'),
              alt: 'Interior of bedroom one.'
            },
            {
              source: require('./assets/bed6alt_new.jpg'),
              alt: 'Alternative view of the interior of bedroom one.'
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
          link: 'https://www.airbnb.com/rooms/27368163?s=67&unique_share_id=49bef54c-285c-4e62-a0cd-8891b64a62be'
        }
      ],
      questions: [
        {
          q: 'Are long term stays allowed?',
          a: 'Yes. Stays for one month or longer recieve a monthly discount of 10% and can be further negoitated depending on the situation. Please contact us for further details!'
        },
        {
          q: 'Is this a private home or will I be sharing the space?',
          a: 'Depending on when you stay with us, there can be anywhere from zero to five other guests staying with us.'
        },
        {
          q: 'What do I share with other quests?',
          a: 'All the common areas are shared in the home. This includes all three bathrooms, living room, kitchen and dining area, laundry room and outdoor patio.'
        },
        {
          q: 'Can I host parties?',
          a: 'Parties, no matter the size, are not allowed.'
        },
        {
          q: 'Is parking available?',
          a: 'Free parking is available behind the home on a first come basis. Additionally, there is always 24/7 free street parking in front of the home.'
        },
        {
          q: 'Are washer and dryer units available on the property?',
          a: 'Yes. There is a small charge in order to use our laundry units and generally, we have soap and softener available.'
        }
      ]
    }
  }

  // componentDidMount = () => {
  //   this.getEvents()
  // }

  // getEvents() {
  //   let that = this;
  //   function start() {
  //     gapi.client.init({
  //     }).then(function () {
  //       return gapi.client.request({
  //         'path': `https://www.googleapis.com/calendar/v3/calendars/8orui7epnl0qf1aaktvq25gvmf1sr6a1@import.calendar.google.com/events?key=AIzaSyCcVvGm01q2CWc0X4aZJgm4emMxLeBio7Uh`,
  //       })
  //     }).then((response) => {
  //       let events = response.result.items
  //       that.setState({
  //         events
  //       }, () => {
  //         console.log(that.state.events);
  //       })
  //     }, function (reason) {
  //       console.log(reason);
  //     });
  //   }
  //   gapi.load('client', start)
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <Section
          class={'amenities'}
          id={'rooms'}
          title={'Rooms and pricing'}
          sub={'All of our rooms feature a smart tv, computer desk and a dresser.'}
        />
        <Body rooms={this.state.rooms} />
        <Section
          class={'amenities attractions-header'}
          id={'nearby'}
          title={'Nearby'}
          sub={'Take a look at some of what is near Woodbridge and their distance.'}
        />
        <Attractions attractions={this.state.attractions} />
        <Section
          class={'amenities faq-header'}
          id={'faq'}
          title={'faq'}
          sub={'Answers to our most frequently asked questions.'}
        />
        <Faq questions={this.state.questions} />
        <Section
          class={'amenities aboutus-header'}
          id={'about'}
          title={'About'}
          sub={'Get to know the story and team behind Woodbridge Luxury Stays.'}
        />
        <About />
      </div>
    );
  }
}

export default App;
