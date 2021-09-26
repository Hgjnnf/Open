import './App.css';
import { Profile } from './components/profile/Profile';
import UpdatePassword from './components/profile/UpdatePassword';
import UpdateUsername from './components/profile/UpdateUsername';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDhlYmYwOWU0ZTQwMDAxNmEwMzE2MiIsImlhdCI6MTYzMjI3MjUwMCwiZXhwIjoxNjMyMjc2MTAwfQ.p8HWHEN_Wh0-4aQEhu_K8UbHJG0C9Qlvj_24NSsCp88';
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/profile">
            < Profile token={authToken} />
          </Route>
          <Route exact path = "/changepassword">
            <UpdatePassword token={authToken} />
          </Route>
          <Route exact path = "/changeusername">
              <UpdateUsername token={authToken} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
