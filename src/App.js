import {
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';

//Components
import HomePage from './components/HomePage'; 

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={HomePage} exact />
    </div>
    </Router>
  );
}

export default App;
