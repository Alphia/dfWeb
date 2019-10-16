import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import AutoComplete from './autoComplete';


const styles = {
    root:{
        marginBottom: '20px'
    }
};
const suggestions = [
    {label: '西京医院'},
    {label: '唐都医院'},
    {label: '西安中医院'},
    {label: '交大一附院'},
    {label: '交大二附院'}
    ];
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
