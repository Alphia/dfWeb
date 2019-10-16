import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AutoComplete from './autoComplete';


const styles = {
    root:{
        marginBottom: '20px'
    }
};
const suggestions=[{label: 'Xijing Hospital'}, {label: 'Jiaoda First Hospital'}];
class HospitalSelector extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div>
                    <AutoComplete suggestions={suggestions}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HospitalSelector);
