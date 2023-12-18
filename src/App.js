import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
