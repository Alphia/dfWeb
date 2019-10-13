import React from 'react';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '../css/App.scss';
import Calendar from "./Calendar";

class App extends React.Component {

  render() {
    return (
      <div className='the-root'>
        <div className='banner'>
          <h1 className='banner__title'>Xi'an Jiaotong University Meeting Scheduler </h1>
        </div>
        <div className='panel'>
        </div>
        <div className='calendar'>
          <Calendar/>
        </div>
      </div>
    );
  }
}

export default App;
