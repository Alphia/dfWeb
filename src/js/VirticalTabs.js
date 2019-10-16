import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import HospitalSelector from "./HospitalSelector";
import {Tabs, Tab, Box, Typography, FormHelperText, FormControl, MenuItem, Select, InputLabel} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 848,
        width: '90%',
        margin: '0 5% 0 5%'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        fontSize: 24,
    },
    tabPanel: {
        width: '80%',
        marginLeft: '50px'
    },
    searchBox: {
        margin: '0 0 0 0',
        minHeight:'170px',
        height: '170px'
        // borderBottom: '1px solid'
    },
    criteria: {
        width: '70%',
        display: 'inline-block',
        minHeight: '170px'
    },
    buy: {
        width: '30%',
        display: 'inline-flex',
        minHeight: '170px',
    },
    button:{
        width: '60%',
        height:'40%',
        fontSize:'30px',
        left:'30%'
    },
    resultTable: {
        marginTop:'20px',
        borderTop: '1px solid',
        // height: 500,
    },
    formControl: {
        margin: theme.spacing(1),
        // marginTop:'20px',
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: '10px',
    },
    label: {
        fontSize: '24px',
    },
    input: {
        fontSize: '24px'
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [depValues, setDepValues] = React.useState({dep: '',});
    const [symptomValues, setSymptomValues] = React.useState({symptom: '',});


    const handleTaBsChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDepChange = event => {
        setDepValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSymptomChange = event => {
        setSymptomValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleTaBsChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab className={classes.tab} label="Search & buy" {...a11yProps(0)} />
                <Tab className={classes.tab} label="History Orders" {...a11yProps(1)} />
                <Tab className={classes.tab} label="Discount" {...a11yProps(2)} />
                <Tab className={classes.tab} label="News" {...a11yProps(3)} />
                <Tab className={classes.tab} label="Community" {...a11yProps(4)} />
                <Tab className={classes.tab} label="My Favorite" {...a11yProps(5)} />
            </Tabs>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <div className={classes.searchBox}>
                    <div className={classes.criteria}>
                        <HospitalSelector/>
                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.label} shrink htmlFor="dep-label-placeholder">
                                Department
                            </InputLabel>
                            <Select
                                value={depValues.dep}
                                onChange={handleDepChange}
                                inputProps={{
                                    name: 'dep',
                                    id: 'dep-label-placeholder',
                                    className: classes.input,
                                }}
                                displayEmpty
                                name="age"
                                className={clsx(classes.selectEmpty)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ear-Nose-Throut</MenuItem>
                                <MenuItem value={20}>Urology</MenuItem>
                                <MenuItem value={30}>Dermatology</MenuItem>
                                <MenuItem value={40}>Hematology</MenuItem>
                                <MenuItem value={50}>Anesthesiology</MenuItem>
                                <MenuItem value={60}>Cardiology</MenuItem>
                                <MenuItem value={70}>Psychiatry</MenuItem>
                                <MenuItem value={80}>Dermatology</MenuItem>
                                <MenuItem value={90}>Neurology</MenuItem>
                                <MenuItem value={91}>Oncology</MenuItem>
                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.label} shrink htmlFor="symptom-label-placeholder">
                                Symptom
                            </InputLabel>
                            <Select
                                value={symptomValues.symptom}
                                onChange={handleSymptomChange}
                                inputProps={{
                                    name: 'symptom',
                                    id: 'symptom-label-placeholder',
                                    className: classes.input,
                                }}
                                displayEmpty
                                name="symptom"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ear-Nose-Throut</MenuItem>
                                <MenuItem value={20}>Urology</MenuItem>
                                <MenuItem value={30}>Dermatology</MenuItem>

                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <FormControl>

                        </FormControl>
                        <TextField label="Rows Per Data Source"
                                   className={classes.textField}
                                   InputLabelProps={{className: classes.label}}
                                   InputProps={{className: classes.input}}
                                   defaultValue={5}

                        />
                    </div>
                    <div className={classes.buy}>
                        <Button variant="contained" className={classes.button}>Purchase</Button>
                    </div>
                </div>
                <div className={classes.resultTable}>

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
        </div>
    );
}
