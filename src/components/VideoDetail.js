import './VideoDetail.css';
import React from 'react';

class VideoDetail extends React.Component {
  render() {
    const video = this.props.video;
    if (!video) {
      return <div>Loading</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} width="550" height="330" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">
            {video.snippet.title}
          </h4>
          <p>
            {video.snippet.description}
          </p>
          <div className="ui"></div>
        </div>
      </div>
    );
  };
}

export default VideoDetail;
