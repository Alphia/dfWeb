import React from "react";
import TextField from '@material-ui/core/TextField';
import i18n from "../i18n";
import moment from 'moment';
import AlarmIcon from "@material-ui/icons/AlarmOutlined"
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  range: {
    padding: "3px 0"
  },
  icon: {
    margin: "3px 8px 3px 2px",
    fontSize: "45px",
  },
  timePicker: {
    margin: "3px 8px",
    width: 200,
  }
};

class RangePicker extends React.Component {

  state = {
    range: {
      start: this.props.start,
      end: this.props.end,
    }
  };

  updateRange = name => ev => {
    let range = {start: this.state.range.start, end: this.state.range.end};
    range[name] = ev.target.guests;
    this.props.rangeChangedHandler(range);
    this.setState({range: range});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.range}>
        <AlarmIcon className={classes.icon}/>
        <TextField
          onChange={this.updateRange('start')}
          className={classes.timePicker}
          label={i18n.startTimeHolder}
          defaultValue={moment(this.props.start).format('YYYY-MM-DDTHH:mm').toString()}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}/>
        <TextField
          onChange={this.updateRange('end')}
          className={classes.timePicker}
          label={i18n.endTimeHolder}
          type="datetime-local"
          defaultValue={moment(this.props.end).format('YYYY-MM-DDTHH:mm').toString()}
          InputLabelProps={{
            shrink: true,
          }}/>
      </div>
    )
  }
}

export default withStyles(styles)(RangePicker);