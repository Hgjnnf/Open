import './App.css';
import { Profile } from './components/profile/Profile';

function App() {
  let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjI2Mjk4Mjc2NjBhNTZhYzczY2QyZCIsImlhdCI6MTYzMDIyMzk2MywiZXhwIjoxNjMwMjI1NzYzfQ.MoTZH0tsRC2OtItXpi9-PqbYFpkXuv6yHkhkp947Vcg';

  return (
    <div className="App">
      < Profile token={authToken} />
    </div>
  );
}

export default App;
