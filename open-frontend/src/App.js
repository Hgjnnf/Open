import "./App.css";

//components
import MailCard from "./components/common/mails/MailCard";
import MailViewPage from "./components/mailview/MailViewPage.js";
import Login from "./components/common/home/HomeLogin";
import Signup from "./components/common/home/HomeSignup";
import { Profile } from './components/profile/Profile';
import UpdatePassword from './components/profile/UpdatePassword';
import UpdateUsername from './components/profile/UpdateUsername';

//routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={MailViewPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* to be added later
          <Route exact path="/forgotpassword">

          </Route>
          <Route exact path="/resetpassword/:resetToken">

          </Route>
          */}
          <Route exact path="/profile">
            < Profile/>
          </Route>
          <Route exact path = "/changepassword">
            <UpdatePassword/>
          </Route>
          <Route exact path = "/changeusername">
              <UpdateUsername/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
