import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function createData(name, gender, age, sym, judge1, exam, judge2, heal, review,from) {
    return {name, gender, age, sym, judge1, exam, judge2, heal, review, from};
}

const aa = '外耳道胆脂瘤的症状临床多发生于成年人，单侧多见，可侵犯双耳。无继发感染的小胆脂瘤可无明显症状。胆脂瘤较大时，可出现耳内堵塞感，耳鸣。如继发感染可有耳痛，头痛，外耳道有分泌物，具臭味。外耳道胆脂瘤的检查见外耳道深部为白色或黄色胆脂瘤堵塞，其表面被多层鳞片状物质包裹。\n' +
    '\n'
const rows = [
    createData('李xx', '男', 54, '患者口述耳部闷堵感、听力下降；外耳道可见脓状分泌物，有臭味，部分红肿', '音叉检查为传导性听力下降。局部麻醉、或全麻后方可清理胆脂瘤上皮。', '乳突CT片检查病变有否侵及中耳、乳突腔。', '中耳有感染，可见明显胆脂瘤，需及时手术取出', '不合并感染的胆脂瘤较易取出。由于外耳道肿胀，触痛明显，取出困难。控制感染。静脉输液、在耳镜下彻底的取出胆脂瘤上皮。', '二周后复查，患者恢复良好，听力有改善','西京医院'),
    createData('付x', '女', 23, '患者口述耳部闷堵感、听力下降；外耳道可见脓状分泌物，有臭味，部分红肿', '音叉检查为传导性听力下降。局部麻醉、或全麻后方可清理胆脂瘤上皮。', '乳突CT片检查病变有否侵及中耳、乳突腔。', '中耳有感染，可见明显胆脂瘤，需及时手术取出', '不合并感染的胆脂瘤较易取出。由于外耳道肿胀，触痛明显，取出困难。控制感染。静脉输液、在耳镜下彻底的取出胆脂瘤上皮。', '二周后复查，患者恢复良好，听力有改善','西京医院'),
    createData('张xx', '女', 18, '患者口述耳部闷堵感、听力下降；外耳道可见脓状分泌物，有臭味，部分红肿', '音叉检查为传导性听力下降。局部麻醉、或全麻后方可清理胆脂瘤上皮。', '乳突CT片检查病变有否侵及中耳、乳突腔。', '中耳有感染，可见明显胆脂瘤，需及时手术取出', '不合并感染的胆脂瘤较易取出。由于外耳道肿胀，触痛明显，取出困难。控制感染。静脉输液、在耳镜下彻底的取出胆脂瘤上皮。', '二周后复查，患者恢复良好，听力有改善','西京医院'),
    createData('贺x', '男', 53, '患者口述听力下降；外耳道可见脓状分泌物，有臭味，', '音叉检查为传导性听力下降。局部麻醉、', '耳镜检查', '服药消炎', '由于外耳道肿胀，控制感染。静脉输液。', '二周后复查，患者恢复良好，听力有改善','交大一附院'),
    createData('李x', '男', 37, '患者口述听力下降；外耳道可见脓状分泌物，有臭味，', '音叉检查为传导性听力下降。局部麻醉。', '耳镜检查', '服药消炎', '由于外耳道肿胀，控制感染。静脉输液。', '二周后复查，患者恢复良好，听力有改善','交大一附院'),
    createData('吴x', '女', 40, '患者口述听力下降；外耳道可见脓状分泌物，有臭味，', '音叉检查为传导性听力下降。局部麻醉', '耳镜检查', '服药消炎', '由于外耳道肿胀，控制感染。静脉输液。', '二周后复查，患者恢复良好，听力有改善','交大一附院'),
    // createData('樊xx', '男', 23, '患者口述耳部闷堵感、听力下降；外耳道可见脓状分泌物，有臭味，部分红肿', '音叉检查为传导性听力下降。局部麻醉、或全麻后方可清理胆脂瘤上皮。', '乳突CT片检查病变有否侵及中耳、乳突腔。', '中耳有感染，可见明显胆脂瘤，需及时手术取出', '不合并感染的胆脂瘤较易取出。由于外耳道肿胀，触痛明显，取出困难。控制感染。静脉输液、在耳镜下彻底的取出胆脂瘤上皮。', '二周后复查，患者恢复良好，听力有改善'),
];

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    {id: 'name', numeric: false, disablePadding: true, label: '名字'},
    {id: 'gender', numeric: false, disablePadding: true, label: '性别'},
    {id: 'age', numeric: true, disablePadding: false, label: '年龄'},
    {id: 'sym', numeric: false, disablePadding: true, label: '症状'},
    {id: 'judge1', numeric: false, disablePadding: true, label: '初步诊断'},
    {id: 'exam', numeric: false, disablePadding: false, label: '检查'},
    {id: 'judge2', numeric: false, disablePadding: true, label: '诊断'},
    {id: 'heal', numeric: false, disablePadding: false, label: '治疗方案'},
    {id: 'review', numeric: false, disablePadding: false, label: '复查'},
    {id: 'from', numeric: false, disablePadding: false, label: '数据源'},
];

function EnhancedTableHead(props) {
    const {classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{'aria-label': 'select all desserts'}}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={order}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
}));

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const {numSelected} = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        外耳道胆脂瘤病例
                    </Typography>
                )}
            </div>
            <div className={classes.spacer}/>
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon/>
                        </IconButton>
                    </Tooltip>
                )}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length}/>
                <div className={classes.tableWrapper}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{'aria-labelledby': labelId}}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.gender}</TableCell>
                                            <TableCell align="right">{row.age}</TableCell>
                                            <TableCell align="right">{row.sym}</TableCell>
                                            <TableCell align="right">{row.judge1}</TableCell>
                                            <TableCell align="right">{row.exam}</TableCell>
                                            <TableCell align="right">{row.judge2}</TableCell>
                                            <TableCell align="right">{row.heal}</TableCell>
                                            <TableCell align="right">{row.review}</TableCell>
                                            <TableCell align="right">{row.from}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </div>
    );
}
