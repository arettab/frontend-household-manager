// // import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Dashboard from './components/dashboard';
import PasswordResetForm from './components/passwordResetForm';
import Userfront from "@userfront/react";

import './App.css';

function App() {
  const [userData, setUserData] = useState([]);
  const [householdData, setHouseholdData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchData(Userfront.user["userId"]);
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const handleHouseholdSubmit = (data) => {
    addNewHouseholdApi(data)
      .then(newHousehold => {
        setHouseholdData ([...householdData, newHousehold])
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
