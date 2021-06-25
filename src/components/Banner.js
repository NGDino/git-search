import React, {useState} from 'react';
import { Typography, Grid, Paper, TextField, Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import devActivity from '../images/dev-activity.svg';
import {makeStyles} from '@material-ui/core/styles'

//use history import to redirect after search function
import {useHistory} from 'react-router-dom';

//styles for material-ui
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
    button: {
        height: '100%'
    }


}))
const Banner = () => {
    //useHistory variable to link to next page after function
    const history = useHistory()

    //classes for material ui stylesheet
    const classes = useStyles()

    //state for for entry
    const [keyword, setKeyword] = useState('');
    //state for errors for form validation
    const [errors, setErrors] = useState({searchKeyword:''});
    // validation function to set error and also error message
    const validate =() => {
        //start with empty object allows possibillity for more inputs later
        let temp = {}
        //if empty text keyword field then show error message
        temp.searchKeyword = keyword?'':'You must enter a search keyword'
        //set errors to temp object 
        setErrors({
            ...temp
        })
        console.log(temp)
        //return true if all inputs have no error message
        return  Object.values(temp).every(x => x === '')
    }

    //set state to users search input on form input change
    const handleChange= (e) => {
        const {value} = e.target
        setKeyword(value)
    }

    //set search keyword to localStorage then open searchList page
    const handleSearch = async () => {
        // if validation returns true execute function
        if(validate()){
            //set localStorage
            await localStorage.setItem('keyword', keyword)
            console.log('key', keyword)
            console.log('error', errors)
            
            //route to searchList page
            history.push('/search')
        }else return //exit func if not validated
    
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

                <Grid container 
                className={classes.textbox}
                direction='row'
                justify="flex-start"
                alignItems="center"
                spacing = {2}

                >
                    <Grid item xs={12}>
                        <Typography variant = 'h5' gutterBottom>
                            Search GitHub for Repositories
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            required
                            fullWidth
                            id="search-keyword"
                            label="Search Keyword"
                            variant="filled"
                            onChange={handleChange}
                            error ={errors.searchKeyword.length > 2}
                            helperText= {errors.searchKeyword}
                            >

                        </TextField>
                    </Grid>
                    <Grid item xs={1}>
                        <Button onClick={handleSearch} color='primary' variant="contained" className={classes.button}>
                            <SearchIcon fontSize="large"/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
                
            </Grid>
        </div>
    )
}

export default Banner;