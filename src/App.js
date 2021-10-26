import "./App.css";
import Home from './components/Home/home'
import Landindpage from './components/LandingPage/landingPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from "./components/contact/contact";
import About from "./components/About/about";
import NavBar from "./components/NavBar/navBar";
import NotFound from "./components/NotFound/NotFound";

function App() {
 

  return (
    <>
    
    <Router>
      
      <Switch>
        <Route exact path="/">  
                    <Landindpage/>
        </Route>
        
        <Route exact path="/home">  
          
            <Home/>
        </Route>
        <Route exact path="/contact">  
            <NavBar/> 
            <Contact/>
        </Route>
        <Route exact path="/about">  
            <NavBar/>
            <About/>
        </Route>
        <Route default >
            <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
    

    
  );
}

export default App;