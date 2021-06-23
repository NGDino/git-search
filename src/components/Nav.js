import React from 'react';

import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// react router dom components
import { Link as RouterLink } from 'react-router-dom';

//Material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
            flexGrow: 1,
            textDecoration: 'none',
            display: 'block',
        flexGrow: 1,
    },
}));

const Nav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap href='/'component={RouterLink} to='/'>
                        GitCommit
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
};

export default Nav;