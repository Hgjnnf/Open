import './App.css';
import { Profile } from './components/profile/Profile';

function App() {
  let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTBhZWM4NjhiNzRiN2ZjODg0ODNhNCIsImlhdCI6MTYzMDIwMzMzMCwiZXhwIjoxNjMwMjAzOTMwfQ.Y30auKcfM_LYTthqB-bvKVBLeSPWcKDCMdEcOk5PisE';

  return (
    <div className="App">
      < Profile token={authToken} />
    </div>
  );
}

export default App;
