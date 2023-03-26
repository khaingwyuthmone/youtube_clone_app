import React, { useEffect, useState } from 'react'
import { Box, Stack,  Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Video from './Video'
import { fetchAPI } from '../utils/fetchAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos ] = useState([]);

  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
    })
    
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection : { sx : "column", md : 'row'} }}>
        <Box sx={{height : {sx : 'auto', md : '92vh'}, borderRight : '1px solid #3d3d3d', px : {sx : 0, md:2}}}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            {/* <p
                className='copyright'
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  color: '#fff',
                  fontSize: '15px',
                  left: '30px',
                  opacity: '0.8',
                }}
            >
              Copyright © 2022 YT, Inc.
            </p> */}
        </Box>

        <Box p={2} sx={{overflowY : 'auto', height : '90vh' , flex : 2}}>
          <Typography sx={{color : 'white'}} fontWeight="bold">
              {selectedCategory}  <span style={{color : '#F31503'}}>Videos</span>
          </Typography>
          <Video videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed