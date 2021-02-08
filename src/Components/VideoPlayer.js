import React from 'react';
import { useGlobalContext } from '../Context';
import Button from '@material-ui/core/Button';
const VideoPlayer = () => {
  const { videoId, vidData } = useGlobalContext();
  const video = vidData.find((vid) => vid.id.videoId === videoId);
  const { title, channelTitle, description } = video.snippet;

  return (
    <>
      <div className='vid-player'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className='responsive-iframe '
        >
          {title}
        </iframe>
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Button variant='contained'>{channelTitle}</Button>
        <Button color='danger' variant='contained'>
          Subscribe
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h4>{description}</h4>
      </div>
    </>
  );
};

export default VideoPlayer;
