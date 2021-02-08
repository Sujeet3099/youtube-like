import axios from 'axios';

const KEY = 'AIzaSyD87M65mFa5uTJbbVDNJ-WPxDm3SDY4MYY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
  },
});
