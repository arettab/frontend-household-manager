import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/loginForm';
import Dashboard from './components/dashboard';
import PasswordResetForm from './components/passwordResetForm';
import Userfront from "@userfront/react";
import  { CssBaseline, ThemeProvider } from "@mui/material";
import {ColorModeContext, useMode} from './theme'
import './App.css';
import { useEffect, useState } from 'react';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import MemberDashboard from './components/memberDashboard';
import HohDashboard from './components/hohdashboard';
import { getUserfromApi} from './api';
import Signup from './components/signup';
import EventForm from './components/eventForm';

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const userId = Userfront.user.userId  
  
function App() {
  const [userData, setUserData] = useState([]);
  const [theme, colorMode] =useMode();
  const location = useLocation();
  const background = location.state && location.state.background;

  const fetchUserData = async () => {
    const user = getUserfromApi(userId);
      setUserData(user);
  }


  useEffect((userData) => {
    fetchUserData();
    console.log(userData)
  },[]);



  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar userData={userData} />
          <main className="content">
            <Topbar />
            <Routes location={background || location}>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/reset' element={<PasswordResetForm/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
                <Routes>
                <Route path='/dashboard' element={
                      <RequireAuth>
                        <MemberDashboard className="memberDashboard" userData={userData} />
                      </RequireAuth>} />
                      <Route path='/member' element={
                      <RequireAuth>
                        <HohDashboard className="hohDashboard" userData={userData} />
                      </RequireAuth>} />
                      <Route path='/hoh' element={
                      <RequireAuth>
                        <Dashboard className="dashboard" userData={Userfront.user} />
                      </RequireAuth>} />
                      <Route path='/eventForm' element={
                      <RequireAuth>
                        <EventForm />
                      </RequireAuth>} />
                </Routes>
          </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App;
