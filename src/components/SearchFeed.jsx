import React, { useEffect, useState } from 'react'
import { Box, Stack,  Typography } from '@mui/material'
import Video from './Video'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos ] = useState([]);
  const {searchText} =  useParams();

  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${searchText}`)
    .then((data) => {
      setVideos(data.items)
    })
    
  },[searchText]);

  return (
      <Box p={2} sx={{overflowY : 'auto', height : '90vh' , flex : 2, ml : {sm : '100px'}}}>
          <Typography sx={{color : 'white'}} fontWeight="bold">
              Search Results for : <span style={{color : '#F31503'}}>{searchText}</span>
          </Typography>
          <Video videos={videos}/>
      </Box>
  )
}

export default SearchFeed