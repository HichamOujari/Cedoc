import React from 'react';
import './App.css';
import Home from "./components/home/Home";

class App extends React.Component{
  constructor() {
      super();
      this.state = {
          route:'home'
      }
  }


  render(){
    const {route} = this.state;
    return (
        <div className="App">
            {route === 'home'
                ? <Home/>
                :<div><p>...</p></div>

            }
        </div>
    );

  }




}

export default App;
