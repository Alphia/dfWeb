import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventPopup from "./EventPopup";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Event from './Event';

const positionStyles = (coordinate) => ({
  popup: {
    position: 'absolute',
    left: coordinate.x,
    top: coordinate.y,
    'z-index': 100,
  }
});

class Calendar extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    allEvents: [ // initial event data
    ],
    isPopped: false,
    popCoordinate: {}
  };

  popupEvent = (arg) => {

    let event = new Event({}, arg.date.getTime());
    let coordinate = {x: arg.jsEvent.pageX, y: arg.jsEvent.pageY};
    console.log(event);

    this.setState({
      allEvents: this.state.allEvents.concat(event),
      isPopped: true,
      popEvent: event,
      popCoordinate: coordinate
    });
  };

  updateEvent = event => {
    this.state.allEvents.filter(cEvent => cEvent.id === event.id)
  };

  render() {
    const PositionedPopup = withStyles(positionStyles(this.state.popCoordinate))(EventPopup);
    return (
      <div>
        <PositionedPopup
          eventUpdatedHandler={this.updateEvent}
          isPopped={this.state.isPopped}
          event={this.state.popEvent}/>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={this.calendarComponentRef}
          events={this.state.allEvents}
          dateClick={this.popupEvent}
          editable={true}/>
      </div>
    )
  }
}

export default Calendar;