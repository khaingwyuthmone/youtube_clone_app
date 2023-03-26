import React from 'react'
import { Box, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import Video  from './Video'
import ChannelCard from './ChannelCard'


const ChannelDetail = () => {
  const {id}  = useParams();
  const [channelDetail, setChannelDetail ] = useState(null);
  const [videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {
      setChannelDetail(data?.items[0])
    })

    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {
      setVideos(data?.items)
    })
  },[id])


  console.log(channelDetail)
  console.log(videos)
  return (
    <Box minHeight="90vh">
        <Box>
            <div style={{
              zIndex  : 10,
              height   : '300px',
              background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,111,121,1) 35%, rgba(0,212,255,1) 100%)"
            }}/>
            <ChannelCard channel={channelDetail} marginTop="-100px"/>
        </Box>
        <Box display="flex" p={2}>
              <Box sx={{mr : {sm : '100px'}}}/>
              <Video videos={videos}/>
        </Box>
        
    </Box>
    
  )
}

export default ChannelDetail