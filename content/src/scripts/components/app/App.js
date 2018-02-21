import React, {Component} from 'react';
import io from 'socket.io-client';
import './App.css'
import SocketService from '../../services/socketService'
import Box from '../timeSeriesBox/box'

class App extends Component {
  constructor() {
    super();

    this.state = {
      socket: null,
      data: []
    };
  }

  chromeListener(){
    chrome.runtime.onMessage.addListener((req) =>{
      if(req.todo == "showData"){
        if(!this.socket){
          let socket = SocketService.initSocket(); 
          this.setState({socket});
          this.readServer();
        }
        anchor.style.display = "block";
      }
      if(req.todo == "hideData"){
        anchor.style.display = "none";
      }
    });
  }
  
  componentDidMount() {    
    this.chromeListener();
  }

  readServer(){
    this.state.socket.on('timeSeries', (data) => {
      this.setState({data: JSON.parse(data)});
      console.log('read');
    });
  }

  render() { 
    
    let timeSeriesData = this.state.data.map(tsData => {
      return <Box data={tsData} />;     
    });   

    return (
      <div className="flexContainer">
        {timeSeriesData}
      </div>
    );
  }
}

export default App;
