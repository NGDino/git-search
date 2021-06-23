import React, {useState} from 'react';
import { Typography, Grid, Paper, TextField, Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import devActivity from '../images/dev-activity.svg';
import {makeStyles} from '@material-ui/core/styles'

//use history import to redirect after search function
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bannerContainer: {
        maxwidth: '100vw',
        backgroundImage: `url(${devActivity})`,
        minHeight: '75vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    image: {
        height: '60vh',
        position: 'relative'
    },
    textbox: {
        positon: 'absolute',
        margin: '4em',
        padding: '3em',
        textAlign: 'center',
        height: '30%',
        backgroundColor: '#d3d3d3CC',
        boxShadow: '0 5px 5px 4px'
    },
    input: {
        backgroundColor: '#fffff'
    }

}))
const Banner = () => {
    //useHistory variable
    const history = useHistory()

    //classes for material ui stylesheet
    const classes = useStyles()

    //state for for entry
    const [keyword, setKeyword] = useState('');
    //set errors for validation true or false
    const [errors, setErrors] = useState(true);

    //set state to users search input
    const handleChange= (e) => {
        const {value} = e.target
        console.log(value)
        
        setKeyword(value)
    }

    //set global state then open searchlist page
    const handleSearch = async () => {
        console.log('keyword', keyword)
        await localStorage.setItem('keyword', keyword)
        history.push('/search')
    }

    return(
        <div className={classes.root}>
            <Grid 
            container
            direction='row'
            justify="flex-start"
            alignItems="center"
            spacing = {2}
            className={classes.bannerContainer}>

                <Grid item 
                xs={12} sm={6} 
                className={classes.textbox}

                component={Paper}
                >

                        <Typography variant = 'h5' gutterBottom>
                            Search GitHub for Repositories
                        </Typography>
                        <form>
                            <TextField
                                required
                                className={classes.input}
                                id="search-keyword"
                                label="Search Keyword"
                                defaultValue="Hello World"
                                variant="outlined"
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'keyword for repository search' }}
                            />
                            <Button onClick={handleSearch} color='primary' variant="contained">
                                <SearchIcon/>
                            </Button>
                        </form>
                        
                </Grid>
            </Grid>
            <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                
            </Grid>
        </div>
    )
}

export default Banner;