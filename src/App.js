// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Redirect,
} from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import PasswordResetForm from './components/passwordResetForm';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link t='/reset'>Password Reset</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/reset' element={<PasswordResetForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
