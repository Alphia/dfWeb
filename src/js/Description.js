import React from "react";
import i18n from "../i18n";
import TextField from "@material-ui/core/TextField";
import DescIcon from "@material-ui/icons/DescriptionOutlined"
import withStyles from "@material-ui/core/styles/withStyles";

const style = {
  desc: {
    padding: "3px 0",
  },
  icon: {
    fontSize: 42,
    margin: "3px 10px 3px 2px",
  },
  descTextField: {
    margin: "3px 8px",
    width: 420,
  }
};

class Description extends React.Component {

  state = {
    desc: '',
  };

  updateDesc = ev => {
    this.props.descChangedHandler(ev.target.guests);
    this.setState({desc: ev.target.guests});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.desc}>
        <DescIcon className={classes.icon}/>
        <TextField
          onChange={this.updateDesc}
          value={this.state.desc}
          className={classes.descTextField}
          placeholder={i18n.descriptionHolder}
          label={i18n.descriptionHolder}
          multiline
          rowsMax="8"/>
      </div>
    )
  }
}

export default withStyles(style)(Description);