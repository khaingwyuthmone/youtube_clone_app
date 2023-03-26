import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelUrl, demoProfilePicture } from '../utils/constants'
import { Link } from 'react-router-dom'


const ChannelCard = ({channel, marginTop}) => {
  console.log("Channel ", channel)
  return (
    <Box 
      sx={
        { 
          boxShadow : 'none', 
          borderRadius : '20px' , 
          display : 'flex', 
          justifyContent : 'center', 
          alignItems : 'center', 
          width : {xs : '356px', md : '320px'}, 
          height : '326px', 
          margin : 'auto',
          marginTop : marginTop
        }}>
        <Link to={`/channel/${channel?.id?.channelId}`}>
          <CardContent sx={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', textAlign : 'center' , color : '#FFF'}}>
              <CardMedia 
                sx = {{borderRadius : '50%' , height : '180px', width : '180px', mb : 2 , border : '1px solid #e3e3e3'}}
                alt = {channel?.snippet?.title}
                image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}>

              </CardMedia>
              <Typography variant="h6">
                  {channel?.snippet?.title}
                  <CheckCircle sx={{ fontSize : 12, color : 'gray', ml : '5px' }}/>
              </Typography>
              <Typography variant="h6" sx={{fontSize : 14}}>
                  {Number(channel?.statistics?.subscriberCount).toLocaleString()}  Subscribers
              </Typography>

          </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard