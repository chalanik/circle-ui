import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import UserInfo from './Pages/UserInfo/UserInfo';
import Dashboard from './Pages/Dashboard/Dashboard';
import Dependents from './Pages/Dependents/Dependents';
import Circle from './Pages/Circle/Circle';
import Launch from './Pages/Launch/Launch';
import Discussion from './Pages/Discussion/Discussion';

const theme = createTheme({
  palette: {
    primary: {
      main: "#187ABA",
      light: "#42a5f5",
      dark: "#1565c0"
    }
  }
});

function App() {

  const fetchUsers = async () => {
    const response = await fetch(
        "https://express-nikhil.azurewebsites.net/api/v1/user/chalanik"
      );
     const data = await response.json();
     console.log(data);
    };

  useEffect( () => {
    fetchUsers();
  }, []); 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Launch />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/dependents" element={<Dependents />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/circle" element={<Circle />} />
            <Route path="/post" element={<Discussion />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
