import React from 'react';
import Error404 from './Error404';
import Navbar from './Navbar';
import ChannelList from './ChannelList';
import SignIn from './SignIn';
import VideoPlayer from './VideoPlayer';
import Search from './Search';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import masterChannelList from '../masterChannelList';
import masterVideoList from '../masterVideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      masterChannelList: {},
      masterVideoList: {},
      selectedVideo: null
    };
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
  }

  componentDidMount() {
    let newMasterChannelList = Object.assign({}, masterChannelList);
    let newMasterVideoList = Object.assign({}, masterVideoList);
    this.setState({
      masterChannelList: newMasterChannelList,
      masterVideoList: newMasterVideoList
    });
  }

  handleVideoSelection(videoId) {
    this.setState({selectedVideo: videoId});
    alert(`You selected VideoId: ${videoId}`);
  }

  render() {
    return (
      <div id="app-container">
        <style jsx global>
          {`
            #app-container {
              min-height: 100%;
              position: relative;
              padding: 55px 0 75px;
            }

            nav {
              position: fixed;
              top: 0;
              z-index: 100;
            }

            footer {
              position: absolute;
              bottom: 0;
            }
          `}
        </style>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() =>
            <ChannelList channelList={this.state.masterChannelList} />
          } />
          <Route path='/signin' component={SignIn} />
          <Route path='/video' render={() =>
            <VideoPlayer video={this.state.selectedVideo} />
          } />
          <Route path='/search' render={() =>
            <Search
              videoList={this.state.masterVideoList}
              onVideoSelection={this.handleVideoSelection}
            />
          } />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
