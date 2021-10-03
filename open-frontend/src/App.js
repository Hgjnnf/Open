import "./App.css";

//components
import MailCard from "./components/common/mails/MailCard.js";
import MailViewPage from "./components/mailview/MailViewPage.js";
import Signup from "./components/common/home/HomeLogin";
import Login from "./components/common/home/HomeSignup";
import MailWritePage from "./components/mailWrite/MailWritePage";

//routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/mailview" component={MailViewPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mailwrite" component={MailWritePage} />
          {/* to be added later
          <Route exact path="/forgotpassword">

          </Route>
          <Route exact path="/resetpassword/:resetToken">

          </Route>
          */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
