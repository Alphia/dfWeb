import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import HospitalSelector from "./HospitalSelector";
import {Tabs, Tab, Box, Typography, FormHelperText, FormControl, MenuItem, Select, InputLabel} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CustomTable from "./CustomTable"

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
    news: {
        fontSize:'24px',
        margin:'30px 0 0 50px',
    },
    link:{
        display: 'block',
        marginBottom: '10px'
    },
    tabPanel: {
        width: '80%',
        marginLeft: '50px'
    },
    searchBox: {
        margin: '0 0 0 0',
        minHeight: '170px',
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
    button: {
        width: '60%',
        height: '40%',
        fontSize: '30px',
        left: '30%'
    },
    resultTable: {
        marginTop: '20px',
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
    const [depValues, setDepValues] = React.useState({dep: '', hasPurchase: false});
    const [symptomValues, setSymptomValues] = React.useState({symptom: '',});
    const [resultValues, setResultValues] = React.useState({hasPurchase: false});

    const handlePurchase = () => {
        alert("您确定以300元购买6条数据？当前余额6100元！");
        setResultValues(old => ({
            ...old,
            hasPurchase: true
        }))
    };

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
                <Tab className={classes.tab} label="News" {...a11yProps(0)} />
                <Tab className={classes.tab} label="Search & buy" {...a11yProps(1)} />
                <Tab className={classes.tab} label="Orders" {...a11yProps(2)} />
                <Tab className={classes.tab} label="Discount" {...a11yProps(3)} />
                <Tab className={classes.tab} label="Community" {...a11yProps(4)} />
                <Tab className={classes.tab} label="My Favorite" {...a11yProps(5)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={classes.news}>
                    <a className={classes.link} href="www.baidu.com">西京医院三个科室的病例数据已经接入Data Federation Shop</a>
                    <a className={classes.link} href="www.baidu.com">唐都医院与Data Federation Shop达成合作意向</a>
                    <a className={classes.link} href="www.baidu.com">交大一附院与Data Federation Shop签署战略合作</a>
                    <a className={classes.link} href="www.baidu.com">西京医院三个科室的病例数据已经接入Data Federation Shop</a>
                    <a className={classes.link} href="www.baidu.com">唐都医院与Data Federation Shop达成合作意向</a>
                    <a className={classes.link} href="www.baidu.com">交大一附院与Data Federation Shop签署战略合作</a>

                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
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
                                    <em>暂空</em>
                                </MenuItem>
                                <MenuItem value={10}>耳鼻喉</MenuItem>
                                <MenuItem value={20}>口腔</MenuItem>
                                <MenuItem value={30}>心脏内科</MenuItem>
                                <MenuItem value={40}>心脏外科</MenuItem>
                                <MenuItem value={50}>肠胃科</MenuItem>
                                <MenuItem value={60}>血液科</MenuItem>
                                <MenuItem value={70}>消化外科</MenuItem>
                                <MenuItem value={80}>消化内科</MenuItem>
                                <MenuItem value={90}>神经科</MenuItem>
                                <MenuItem value={91}>心身科</MenuItem>
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
                                    <em>暂空</em>
                                </MenuItem>
                                <MenuItem value={10}>中耳炎</MenuItem>
                                <MenuItem value={20}>胆脂瘤</MenuItem>
                                <MenuItem value={30}>耵聍堵塞</MenuItem>
                                <MenuItem value={30}>听小骨坏死</MenuItem>
                                <MenuItem value={30}>骨膜受损</MenuItem>

                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <FormControl>

                        </FormControl>
                        <TextField label="Rows Per Data Source"
                                   className={classes.textField}
                                   InputLabelProps={{className: classes.label}}
                                   InputProps={{className: classes.input}}
                                   defaultValue={3}

                        />
                    </div>
                    <div className={classes.buy}>
                        <Button variant="contained" className={classes.button}
                                onClick={handlePurchase}>Purchase</Button>
                    </div>
                </div>
                <div className={classes.resultTable}>
                    {resultValues.hasPurchase ? <CustomTable></CustomTable> : <React.Fragment></React.Fragment>}
                </div>
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
