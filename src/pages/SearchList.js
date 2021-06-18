import React, { useEffect, useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
 } from '@material-ui/core'

import axios from 'axios';


const SearchList = (props) => {
    //state for axios fetc
    console.log('where my keyword yo', props);
    const [repos, setRepos] = useState({hits: []});
    //state for loading
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        const repositories = await axios(
            'https://api.github.com/search/repositories?q=boston&terrier&per_page=15&page=1'
        );
        setRepos(repositories.data.items)
        setLoading(false)
    },[])

    if(isLoading){
        return <div>Loading...</div>;
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className='' aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Repository</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="right">Stars</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {repos.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.language}</TableCell>
                        <TableCell align="right">{row.stargazers_count}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SearchList;