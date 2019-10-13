import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {TextField} from "@material-ui/core";
import i18n from "../i18n";
import LocationIcon from "@material-ui/icons/LocationOnOutlined"
import withStyles from "@material-ui/core/styles/withStyles";


const style = {
  location: {
    padding: "3px 0"
  },
  icon: {
    margin: "3px 8px 3px 2px",
    fontSize: "45px",
  },
  locationPicker: {
    margin: "3px 8px",
    width: 420,
  }
};

class LocationPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationId: '',
    }
  }

  updateLocation = ev => {
    this.props.locationChangedHandler(ev.target.value);
    this.setState({locationId: ev.target.value})
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.location}>
        <LocationIcon className={classes.icon}/>
        <TextField
          className={classes.locationPicker}
          placeholder={i18n.locationHolder}
          label={i18n.locationHolder}
          margin='normal'
          fullWidth={true}
          select={true}
          value={this.state.locationId}
          SelectProps={{
            native: false,
            onChange: this.updateLocation,
          }}>
          <MenuItem value={''}>先不选</MenuItem>
          <MenuItem value={10}>主楼第一会议室</MenuItem>
          <MenuItem value={20}>中一楼会议室</MenuItem>
          <MenuItem value={30}>网信中心203</MenuItem>
        </TextField>
      </div>
    )
  }
}

export default withStyles(style)(LocationPicker);