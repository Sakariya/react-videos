import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
const KEY = 'AIzaSyBZEQE79lffSaYEhSW-gPi_Pb-NjrQpyS8'

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  // Call API using async
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        maxResults: 5,
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = video => {
    console.log('from the app!', video)
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
