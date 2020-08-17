import React from 'react';
import './App.css';

import {Nav} from 'react-bootstrap';

import YouTubeVideoList from '../YouTubeVideoList/YouTubeVideoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categoryNames:['G4_Cousins_Family_Videos','Wedding_Videos','Howard_and_Billy_Videos', 'Howard_Videos',
      'LKC_Videos', 'Full_Family_Videos']
    };
    for(var i = 0; i < this.state.categoryNames.length; i++){
      this[this.state.categoryNames[i]] = React.createRef();
    }
    
  }

  callAPI(videoCategory, categoryArray) {
    fetch(videoCategory)
      .then(res => res.json())
      .then(res => this.setState({[categoryArray]: res}))
      .catch(err => err);
  }

  componentWillMount() {
    //let url = "http://localhost:9000/videos/";
    let url = "https://liu-home-videos-backend.herokuapp.com/videos/";
    this.state.categoryNames.map(videoCategory => {
      this.setState({[videoCategory]:[]});
      this.callAPI(url+`"${videoCategory}"`, videoCategory);
    });
  }

  addSpace(title){
    return title.split('_').join(' ');
  }

  render() {
    let counter = 0;
    let link = "link-";
    return (
      <div className="App">

        <div className="header">
          <h1 className="header_title">The Liu Family's Home Videos</h1>
          <p className="header_description">A collection of the Liu family's home videos throughout the years</p> 
          <Nav fill variant="pills" className="scrollbar">
            {
                this.state.categoryNames.map(videoCategory => {
                  counter++;
                  return <Nav.Item onClick={() => {this[videoCategory].current.scrollIntoView({behavior:"smooth"})}} className="scrollbar-item">
                  <Nav.Link className="scrollbar-item-link" eventKey={link+counter}>{this.addSpace(videoCategory)}</Nav.Link></Nav.Item>
                })
              }
          </Nav>
        </div>


        <div className="video_list_holder">
          {
            this.state.categoryNames.map(videoCategory => {
              return <div ref={this[videoCategory]}>
              <YouTubeVideoList className="video_holder" videoList={this.state[videoCategory]} categoryTitle={videoCategory} id={videoCategory}/></div>
            })
          }
        </div>

      </div>
    );
  }
}

export default App;
