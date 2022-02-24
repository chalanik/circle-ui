import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import UserInfo from './Pages/UserInfo/UserInfo';
import Dashboard from './Pages/Dashboard/Dashboard';
import Dependents from './Pages/Dependents/Dependents';
import Circle from './Pages/Circle/Circle';
import Topics from './Pages/Topic/Topic';
import Launch from './Pages/Launch/Launch';
import Discussion from './Pages/Discussion/Discussion';
import ReplyDialog from './Layout/ReplyDialog/ReplyDialog';

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

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Launch />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/user-info" element={<UserInfo />} />
            <Route path="/pick-topic" element={<Topics />} />
            <Route path="/dependents" element={<Dependents />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/circle/:id" element={<Circle />} />
            <Route path="/post" element={<Discussion />} />
            <Route path="/test" element={<ReplyDialog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
