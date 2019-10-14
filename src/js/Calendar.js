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

  state = {
    allEvents: [ // initial event data
    ],
    isPopped: false,
    popCoordinate: {}
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
      </div>
    )
  }
}

export default Calendar;