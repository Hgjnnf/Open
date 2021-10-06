import "./App.css";

//components"
import MailViewPage from "./components/mailview/MailViewPage.js";
import Login from "./components/common/home/HomeLogin";
import Signup from "./components/common/home/HomeSignup";
import { Profile } from './components/profile/Profile';
import UpdatePassword from './components/profile/UpdatePassword';
import UpdateUsername from './components/profile/UpdateUsername';
import ForgotPassword from "./components/common/home/ForgotPassword";
import ResetPassword from "./components/common/home/ResetPassword";

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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/resetpassword/:resetToken" component={ResetPassword} />
          <PrivateRoute exact path="/" component={MailViewPage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path = "/changepassword" component={UpdatePassword} />
          <PrivateRoute exact path = "/changeusername" component={UpdateUsername} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
