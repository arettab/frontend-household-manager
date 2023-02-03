// import logo from './logo.svg';
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
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewHouseholdForm from './components/newHouseholdForm';



const backendUrl = 'http://localhost:5000'

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const convertFromApi = (apiHousehold) => {
  const {name,...rest} = apiHousehold;

  const newHousehold = {name, ...rest}
  return newHousehold
}


const fetchData = async (userId) => {
  try {
    const response = await axios.get(`${backendUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addHousehold = () => {
  <Link to="/addHouse">Add a Household</Link>
};


const addNewHouseholdApi = (householdData) => {
  const requestBody = {...householdData}

  return axios.post(`backendUrl/households`, requestBody)
  .then(response => {
    return convertFromApi(response.data)
  })
  .catch(error => {
    console.log(error)
  })
}



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
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/reset' element={<PasswordResetForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/dashboard' element={
              <RequireAuth>
                <Dashboard userData={userData} onAddHouseHold={addHousehold}/>
              </RequireAuth>} />
        <Route path='/addHouse' element={ <RequireAuth><NewHouseholdForm handleHouseholdSubmit={handleHouseholdSubmit}/></RequireAuth>} />
      </Routes>
    </Router>
  )
}

export default App;
