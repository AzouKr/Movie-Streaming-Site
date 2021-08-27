import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";
import MLandingPage from './Components/MovieLandingPage/MLandingPage';
import Streaming from './Components/StreamingPage/Streaming';
import TVLandingPage from './Components/MovieLandingPage/TVLandingPage';
import MSearch from './Components/Search/MSearch';
import TVStreaming from './Components/StreamingPage/TVStreaming';
import Movies from './Components/Movies/Movies';
import Series from './Components/Series/Series';


function App() {
  return (
    <div>
<Router>
    <div>
    <Switch>
    <Route path="/moviedetails/:id" exact component={MLandingPage}/>
    <Route path="/tvdetails/:id" exact component={TVLandingPage}/>
    <Route path="/moviestream/:id" exact component={Streaming}/>
    <Route path="/tvstream" exact component={TVStreaming}/>
    <Route path="/moviesearch" exact component={MSearch}/>
    <Route path="/movies" exact component={Movies}/>
    <Route path="/series" exact component={Series}/>
    <Route path="/"  component={Homepage}/>
    </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
