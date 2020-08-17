import React from 'react';
import './YouTubeVideoList.css';

import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';

class YouTubeVideoList extends React.Component {
  addSpace(title){
    return title.split('_').join(' ');
  }
  render() {
    return (
    	<div className="video_list">
    		<h1 className="list_title">{this.addSpace(this.props.categoryTitle)}</h1>
    		{
    			this.props.videoList.map(video => {
    				return <YouTubeVideo link={video.link} id={video.id} title={video.title} thumbnail={video.thumbnail}/>
    			})
    		}
    	</div>
    );
  }
}

export default YouTubeVideoList;