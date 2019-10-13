import React from "react";
import TextField from "@material-ui/core/TextField";
import i18n from "../i18n";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  title: {
    margin: "10px 0 20px 63px",
    width: 420,
  },
  label: {
    fontSize: 26,
    height: 40,
    margin: "10px 0"
    // fontFamily:
  },
  input: {
    fontSize: 26,
    height: 40,
    margin: "10px 0",
    padding: "20px 0 5px",
  }
};

class Title extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  updateTitle = ev =>{
    this.props.titleChangedHandler(ev.target.value);
    this.setState({title: ev.target.value})
  };

  render() {
    const {classes} = this.props;
    return <TextField
      className={classes.title}
      InputLabelProps={{
        classes: {
          root: classes.label,
        }
      }}
      InputProps={{
        classes: {
          root: classes.input,
        }
      }}
      value={this.state.title}
      placeholder={this.props.title}
      label={i18n.titleHolder}
      onChange={this.updateTitle}
    />
  };
}

export default withStyles(styles)(Title);