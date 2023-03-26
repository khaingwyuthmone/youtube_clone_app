import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { CheckCircle } from '@mui/icons-material'
import Video from './Video'

const VideoDetail = () => {
  const {id}  = useParams();
  const [videoDetail, setVideoDetail ] = useState(null);
  const [videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => {
      setVideoDetail(data.items[0])
    });


    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => {
        setVideos(data.items)
    })
  },[id])

  console.log(videoDetail)


  return (
    <Box minHeight="90vh">
        <Stack direction={{xs : 'column', md : 'row'}}>
            <Box flex={1}>
                <Box sx={{width : '100%', position : 'sticky', top : '86px'}}>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}  className="react-player"  controls/>
                    <Typography variant='h5' fontWeight="bold" color="#FFF" py={1} px={2}>
                        {videoDetail?.snippet?.title}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between"  sx={{color : '#fff'}} py={1} px={2}>
                        <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                            <Typography variant={{sm : 'subtitle1', md : 'h6'}} color='#FFF'>
                                {videoDetail?.snippet?.channelTitle}
                                <CheckCircle sx={{ fontSize : 12, color : 'gray', ml : '5px' }}/>
                            </Typography>
                        </Link>
                        <Stack direction="row" gap="20px">
                            <Typography variant='body2'  sx={{ opacity : 0.7}}>
                                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}  views
                            </Typography>
                            <Typography variant='body2'  sx={{ opacity : 0.7}}>
                                {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}  likes
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>

            <Box px={2} py={{md :1, xs : 5}} justifyContent="center" alignItems="center">
                <Video videos={videos} direction="column"/>
            </Box>
        </Stack>

        
    </Box>
  )
}

export default VideoDetail