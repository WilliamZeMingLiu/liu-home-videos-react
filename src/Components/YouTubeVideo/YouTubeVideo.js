import React from 'react';
import './YouTubeVideo.css';

import {IconContext} from 'react-icons';
import {FaPlayCircle} from 'react-icons/fa';

import VideoModal from '../VideoModal/VideoModal';

class YouTubeVideo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	addModalShow: false
    };
  }
  render() {
    return (
		<div className="holder">
      <div className="thumbnail_holder" onClick={() => this.setState({addModalShow: true})} >
  			<img src={this.props.thumbnail} className="video_thumbnail"/>
        <IconContext.Provider value={{color: 'white', size: '60px'}}>
          <FaPlayCircle className="play-icon"/>
        </IconContext.Provider>
      </div>
			<h1>{this.props.title}</h1>		
			<VideoModal show={this.state.addModalShow} onHide={() => this.setState({addModalShow: false})} link={this.props.link} id={this.props.id} title={this.props.title} />	
		</div>


    );
  }
}

export default YouTubeVideo;
