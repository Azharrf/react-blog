import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Topbar from "./component/Topbar/Topbar";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Single from "./pages/Single/Single";
import Settings from "./pages/Settings/Settings";
import Write from "./pages/Write/Write";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" component={user ? (Home) : (SignIn)}/>
        <Route path="/signup" component={user ? (Home) : (SignUp)}/>
        <Route path="/write" component={user ? (Write) : (SignUp)}/>
        <Route path="/settings" component={user ? (Settings) : (SignUp)}/>
        <Route path="/post/:postId" component={Single}/>
      </Switch>
    </Router>
  );
}

export default App;
