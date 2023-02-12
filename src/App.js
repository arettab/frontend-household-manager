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
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
// const newUser = {
//   userId: Userfront.user.userId,
//   userName: Userfront.user.name,
//   userPhoneNumber: Userfront.user.phoneNumber,
//   userEmail: Userfront.user.email
//   household_id: 
// }

// const addNewUser = () => {
//     const requestBody = newUser;
    
//     return axios.post(`${backendUrl}/users`, requestBody)
//       .then(response => {
//         return response.data;
//       })
//       .catch(err => {
//         console.log(err);
//         return Promise.reject(err);
//       });
//   };
  


const getUserfrontData = (userId) => {
  return axios.get(`${backendUrl}/users/proxy/${userId}`)
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log(err)
  })
};

// const getUserfromApi = (userId) => {
//   return axios.get(`${backendUrl}/users/${userId}`)

//   .then(response => {
//     return response.data;
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   };

  
  

function App() {
  const [userData, setUserData] = useState([]);
  const [theme, colorMode] =useMode();
  const location = useLocation();
  const background = location.state && location.state.background;

  const fetchData =  (userId) => {
    return getUserfrontData(userId)
      };
      

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchData(Userfront.user["userId"]);
      setUserData(data);
    };
    fetchUserData();
  }, []);


  
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
                <NewHouseholdForm />
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
                <NewHouseholdForm />
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
