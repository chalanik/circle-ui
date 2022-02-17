import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/Welcome/Welcome';
import UserInfo from './Pages/UserInfo/UserInfo';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
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
            <Route path="/" element={<Welcome />} />
            <Route path="/user-info" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
