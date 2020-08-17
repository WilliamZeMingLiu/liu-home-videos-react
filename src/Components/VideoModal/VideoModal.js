import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

import './VideoModal.css';

class VideoModal extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
		      <Modal.Header>
		        <Modal.Title id="contained-modal-title-vcenter">{this.props.title}</Modal.Title>
		      </Modal.Header>

		      <Modal.Body>
		        <iframe className="video" src={this.props.link + "?autoplay=1"} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
		      </Modal.Body>

		      <Modal.Footer>
		        <Button onClick={this.props.onHide} variant="primary">Close</Button>
		      </Modal.Footer>
		    </Modal>
		)
	}
}

export default VideoModal; 