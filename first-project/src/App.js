import React from 'react';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

class App extends React.Component {
render(){

    return(
      <Router>
      <div>
        <Link to={Home}>Ho</Link>
        <Link to={About}>Aboute</Link>
        <Navbar />
      </div>
      </Router>
    )
}

}

export default App;
