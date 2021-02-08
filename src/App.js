import React from 'react';
import SearchBar from './Components/SearchBar';
import Videos from './Components/Videos';
import VideoPlayer from './Components/VideoPlayer';
import { useGlobalContext } from './Context';
function App() {
  const { isVideo } = useGlobalContext();
  return (
    <>
      <main>
        <div className='search-container'>
          <SearchBar />
        </div>
        <div>{isVideo && <VideoPlayer />}</div>
        <div className='vid-cards-container'>
          <Videos />
        </div>
      </main>
    </>
  );
}

export default App;
