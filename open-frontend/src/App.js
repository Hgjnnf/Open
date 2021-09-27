import "./App.css";

//components"
import MailViewPage from "./components/mailview/MailViewPage.js";
import Login from "./components/common/home/HomeLogin";
import Signup from "./components/common/home/HomeSignup";
import UpdatePassword from "./components/profile/UpdatePassword";
import UpdateUsername from "./components/profile/UpdateUsername";

//routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/mailview" component={MailViewPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* to be added later
          <Route exact path="/forgotpassword">

          </Route>
          <Route exact path="/resetpassword/:resetToken">

          </Route>
          */}
          <PrivateRoute exact path="/" component={MailViewPage} />
          <PrivateRoute
            exact
            path="/changepassword"
            component={UpdatePassword}
          />
          <PrivateRoute
            exact
            path="/changeusername"
            component={UpdateUsername}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
