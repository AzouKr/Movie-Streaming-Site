import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";


function App() {
  return (
    <div>
<Router>
    <div>
    <Switch>
    <Route path="/"  component={Homepage}/>
    </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
