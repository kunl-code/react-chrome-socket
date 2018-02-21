import React, {Component} from 'react';

class App extends Component {  

  showData(){
    chrome.tabs.query({active:true, currentWindow: true}, (tabs)=>{
      chrome.tabs.sendMessage(tabs[0].id, {todo: "showData"});
    });
  }

  hideData(){
    chrome.tabs.query({active:true, currentWindow: true}, (tabs)=>{
      chrome.tabs.sendMessage(tabs[0].id, {todo: "hideData"});
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showData()} >o</button>
        <button onClick={() => this.hideData()} >x</button>
      </div>
    );
  }
}

export default App;