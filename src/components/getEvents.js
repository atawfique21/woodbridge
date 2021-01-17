import Axios from 'axios'

function getEvents() {
  const CALENDAR_ID = '8orui7epnl0qf1aaktvq25gvmf1sr6a1@import.calendar.google.com'
  const API_KEY = 'AIzaSyCcVvGm01q2CWc0X4aZJgm4emMxLeBio7U'
  let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
  Axios.get(url).then(resp => {
    console.log(resp)
    const events = []
    JSON.parse(resp.text).items.map((event) => {
      events.push({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary,
      })
    })
    return events
  })
}

export default getEvents;