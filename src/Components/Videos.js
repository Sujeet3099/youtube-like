import React from 'react';

import { useGlobalContext, singleVideo } from '../Context';

const Videos = () => {
  const { vidData, singleVideo } = useGlobalContext();
  // console.log();
  return (
    <>
      {vidData.map((video, idx) => {
        const { title, thumbnails, channelTitle } = video.snippet;
        const vidId = video.id.videoId;

        const { url, width, height } = thumbnails.medium;
        return (
          <div
            key={idx}
            onClick={() => singleVideo(vidId)}
            className='vid-card'
          >
            <img src={url} alt={title} width={width} height={height} />
            {/* <div> */}
            <h2>{channelTitle}</h2>
            <h4>{title}</h4>

            {/* </div> */}
          </div>
        );
      })}
    </>
  );
};

export default Videos;
