import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
  render() {
    const video = this.props.video;
    return (
      <div className="item video-item" onClick={() => this.props.onVideoSelect(video)}>
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
          <div className="description">
          </div>
        </div>
      </div>
    );
  };
}

// const VideoItem = ({ video, onVideoSelect }) => {
//   return (
//     <div onClick={() => onVideoSelect(video)} className="item video-item">
//       <img
//         className="ui image"
//         src={video.snippet.thumbnails.medium.url}
//       />
//       <div className="content">
//         <div className="header">
//           {video.snippet.title}
//         </div>
//         <div className="description">
//         </div>
//       </div>
//     </div>
//   );
// }

export default VideoItem;
