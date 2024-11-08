import React, {Component} from 'react';
import '../CSS/App.css';
import Betriebspunkte from './Betrtiebspunkte';
import Fanliste from './Fanliste';
import Navigation from './Navigation';
import StartingPage from './StartingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div className="window">
            <div className="sidebar">
              <Navigation></Navigation>
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<StartingPage/>}/>
                <Route path="/betriebspunkte" element={<Betriebspunkte/>}/>
                <Route path="/fanliste" element={<Fanliste/>}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
