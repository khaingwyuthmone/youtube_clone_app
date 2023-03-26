import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({videos, direction}) => {
  return (
   <Stack direction={direction ? direction : 'row'} flexWrap="wrap" justifyContent="start" gap={2} >
        {videos.map((video,id) => (
            <Box key={id}>
                {video.id.videoId &&  <VideoCard video={video}/>}
                {video.id.channelId &&  <ChannelCard channel={video}/>}
            </Box>
        ))}
   </Stack>
  )
}

export default Video