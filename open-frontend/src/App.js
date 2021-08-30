import './App.css';
import { Profile } from './components/profile/Profile';

function App() {
  let authToken = '';

  return (
    <div className="App">
      < Profile token={authToken} />
    </div>
  );
}

export default App;
