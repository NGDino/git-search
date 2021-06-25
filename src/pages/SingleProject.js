import React, {useEffect, useState} from 'react'

import axios from 'axios';

import {useParams} from 'react-router-dom';

const SingleProject = () => {

    const {id} = useParams();

    const repoData = {}

    useEffect(() => {
        async function fetchData() {
            const repo = await axios(
                `https://api.github.com/repositories/${id}`
            );
            console.log(repo);
        }
        fetchData()
    },[])

    return(
        <div>
            Real cool project
        </div>
    )
}

export default SingleProject;