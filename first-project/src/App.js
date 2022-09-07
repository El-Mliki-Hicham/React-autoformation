import React, { Component } from 'react';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import { BrowserRouter ,Routes,Route, Link} from "react-router-dom";

class App extends Component {
render(){
    return(
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/About" element={<About />}> </Route>
    </Routes>
    </BrowserRouter >
    )
}
}
export default App;
