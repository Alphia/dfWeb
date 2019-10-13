import React from 'react';
import '../css/EventPopup.scss';
import RangePicker from './RangePicker';
import GuestPicker from './GuestPicker';
import LocationPicker from './LocationPicker';
import Description from './Description';
import Title from "./Title";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = {
  popup: {
    minWidth: 500,
    minHeight: 400,
    maxWidth: 700,
    maxHeight: 900,
    background: 'white',
    'border-radius': 8,
    'box-shadow': '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',
    'font-family': '"幼圆", serif',
    'font-size': 'large',
    padding: "20px 20px 40px 20px",
  },
  save: {
    background: '#3788d8',
  },
  cancel: {
    background: 'gray',
  }
};

class EventPopup extends React.Component {

  constructor(props) {
    super(props);
    this.changedEvent = {}
  }


  updateEvent = (pName, value)=>{
    this.changedEvent[pName] = value;
  };

  getHandlerByName = pName => value => {
    this.changedEvent[pName] = value;
    this.props.eventUpdatedHandler(this.changedEvent);
  };

  saveEvent = () => {
    console.log("saved:", this.changedEvent);
  };

  render() {
    const {classes, event} = this.props;
    if (this.props.isPopped) {
      return (
        <div className={classes.popup}>
          <Title title={event.title} titleChangedHandler={this.getHandlerByName('title')}/>
          <RangePicker start={event.start} end={event.end} rangeChangedHandler={this.getHandlerByName('range')}/>
          <LocationPicker location={event.extendedProps.location}
                          locationChangedHandler={this.getHandlerByName('location')}/>
          <GuestPicker guests={event.extendedProps.guests} guestChangedHandler={this.getHandlerByName('guests')}/>
          <Description desc={event.extendedProps.desc} descChangedHandler={this.getHandlerByName('desc')}/>
          <Button className={classes.cancel}>Discard</Button>
          <Button className={classes.save} onClick={this.saveEvent}>Save</Button>
        </div>
      )
    } else return null;
  }
}

export default withStyles(styles)(EventPopup);