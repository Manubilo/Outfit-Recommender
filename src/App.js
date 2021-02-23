import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Garments from './components/pages/garments/Garments';
import Moods from './components/pages/moods/Moods';
import Outfits from './components/pages/outfits/Outfits';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/garments" component={Garments}></Route>
        <Route exact path="/moods" component={Moods}></Route>
        <Route exact path="/outfits" component={Outfits}></Route>
      </Switch>
    </Router>
  );
}

export default App;
