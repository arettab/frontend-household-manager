import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import Dashboard from './components/dashboard';
import PasswordResetForm from './components/passwordResetForm';
import Userfront from "@userfront/react";
import NewHouseholdForm from './components/newHouseholdForm';
import  { CssBaseline, ThemeProvider } from "@mui/material";
import {ColorModeContext, useMode} from './theme'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewInviteForm from './components/NewInviteForm';




const backendUrl = 'http://localhost:5000'

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
  

const addNewHouseholdApi = (householdData) => {
  const requestBody = {...householdData};

  return axios.post(`${backendUrl}/households`, requestBody)
  .then (response => {
    return response;
  })
  .catch(error => {
    console.log(error);
  });
};

const addHohApi = (tenantId, userId) => {
  return axios.put(`/users/${tenantId}/${userId}`)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};



const fetchData = async (userId) => {
  try {
    const response = await axios.get(`${backendUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [userData, setUserData] = useState([]);
  const [householdData, setHouseholdData] = useState([]);
  const [theme, colorMode] =useMode();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchData(Userfront.user["userId"]);
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const handleHouseholdSubmit = async (data) => {
    await addNewHouseholdApi(data)
      .then(async newHousehold => {
        setHouseholdData([...householdData, newHousehold]);
        const tenantId = userData.tenantId;
        const userId = Userfront.user["userId"];
        await addHohApi(tenantId, userId);
        const updatedUserData = await fetchData(Userfront.user["userId"]);
        setUserData(updatedUserData);
      })
      .catch(error => console.log(error))
  };
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <Routes location={background || location}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/reset' element={<PasswordResetForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/dashboard' element={
              <RequireAuth>
                <Dashboard userData={userData} />
              </RequireAuth>} />
        <Route path='/addHouse' element={
              <RequireAuth>
                <NewHouseholdForm handleHouseholdSubmit={handleHouseholdSubmit}/>
              </RequireAuth>} />
        <Route path='/invite' element={
          <RequireAuth>
            <NewInviteForm />
          </RequireAuth>
        } />
    </Routes>
    {background && (
        <Routes>
          <Route path='/addHouse' element={
              <RequireAuth>
                <NewHouseholdForm handleHouseholdSubmit={handleHouseholdSubmit}/>
              </RequireAuth>} />
        <Route path='/invite' element={
          <RequireAuth>
            <NewInviteForm />
          </RequireAuth>
        } />
        </Routes>
      )}
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App;
