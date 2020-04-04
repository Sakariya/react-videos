import axios from 'axios';

const KEY = 'AIzaSyBZEQE79lffSaYEhSW-gPi_Pb-NjrQpyS8'

// TODO :: not working params part here..
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
