import React, {useState} from 'react';
import { Typography, Grid, Paper, InputBase, Link} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {Link as RouterLink} from 'react-router-dom';


const Banner = () => {
    const [keyword, setKeyword] = useState('')
    
    const handleChange= (e) => {
        const {value} = e.target
        setKeyword(value)
        console.log('dats dat key', keyword)
    }

    return(
        <div>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <Typography variant = 'h5'>
                            Search GitHub for Repositories
                        </Typography>
                            <InputBase
                                placeholder="Search for repos"
                                inputProps={{ 'aria-label': 'keyword for repository search' }}
                                onChange={handleChange}
                            />
                            <Link component={RouterLink} to ='/search' props={keyword}>
                                <SearchIcon/>
                            </Link>

                            {/* </IconButton> */}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Banner;