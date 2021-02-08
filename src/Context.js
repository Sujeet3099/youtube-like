import React, { useContext, useState } from 'react';
import youtube from './apis/youtube';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // * storing the input from searchBar
  const [searchVid, setSearchVid] = useState('');
  const [vidData, setVidData] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [isVideo, setIsVideo] = useState(false);
  // * will request for the videos and will the fetch data recieved
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO request videos from api and fetch them
    const data = await youtube.get('/search', { params: { q: searchVid } });
    setVidData(data.data.items);
  };
  const singleVideo = (id, idx) => {
    const oneVid = vidData.find((item) => item.id.videoId === id);
    // console.log(oneVid);
    setVideoId(oneVid.id.videoId);
    setIsVideo(true);
  };

  return (
    <AppContext.Provider
      value={{
        searchVid,
        setSearchVid,
        handleSubmit,
        vidData,
        setVidData,
        singleVideo,
        videoId,
        isVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
