import React from "react";
import TextField from "@material-ui/core/TextField";
import i18n from "../i18n";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import withStyles from "@material-ui/core/styles/withStyles";


const style = {
  guest: {
    padding: "3px 0",
  },
  icon: {
    fontSize: 42,
    margin: "3px 10px 3px 2px",
  },
  guestPicker: {
    margin: "3px 8px",
    width: 420,
  }
};

class GuestPicker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      guests: this.props.guests || []
    };
  }

  updateGuest = ev => {
    this.props.guestChangedHandler(ev.target.guests);
    this.setState({guests: ev.target.guests});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.guests}>
        <PeopleIcon className={classes.icon}/>
        <TextField
          value={this.state.guests}
          onChange={this.updateGuest}
          className={classes.guestPicker}
          placeholder={i18n.addGuestHolder}
          label={i18n.addGuestHolder}/>
      </div>
    )
  }
}

export default withStyles(style)(GuestPicker);
