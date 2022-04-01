import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import Setting from './pages/settings/Setting';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import SinglePost from './pages/SinglePost/SinglePost';


function App() {

  const user =  false;

  return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/login">
          {user ? <Home/> : <Login />}
          </Route>
          <Route path="/write">
          {user ? <Home/> : <Write />}
          </Route>
          <Route path="/settings">
          {user ? <Home/> : <Setting />}
          </Route>
          <Route path="/post/:postId">
            <SinglePost/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
