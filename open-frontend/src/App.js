import "./App.css";
import MailCard from "./components/common/mails/MailCard.js";
import MailViewPage from "./components/mailview/MailViewPage.js";
import Signup from "./components/common/home/HomeSignup";
import Login from "./components/common/home/HomeLogin";

function App() {
  return (
    <div className="app">
      <MailViewPage />
    </div>
  );
}

export default App;
