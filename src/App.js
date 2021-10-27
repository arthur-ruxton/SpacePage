import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import SpaceList from './components/SpaceList';
import SpacePeople from './components/SpacePeople';

function App() {
  return (
    <Router>
      <header className='App-header'>
        <h1> Space Page </h1>
        <Nav  />
      </header>
      <main>
        <Switch>
          <Route path='/articles' component={SpaceList} />
          <Route path='/people' component={SpacePeople} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}


export default App;
