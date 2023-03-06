import { CircularProgress, ThemeProvider } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import ResponsiveDrawer from "./components/console";
import { useAuth } from "./components/hooks/auth-hook";
import { AuthContext } from "./components/auth-context/auth-context";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const { token, login, logout, role } = useAuth();

  useEffect(()=>{
    if (localStorage.getItem("darkMode") === 'true') {
      setDarkMode(true)
    }
},[])

  const theme = createTheme({
    palette: {
            mode: darkMode? "dark" : "light",
          background: {
            default: darkMode? '#121212': '#ffffff',
            paper: darkMode? '#1f1f1f': '#ffffff',
          },
          secondary: {
            main: darkMode? '#1f1f1f': '#ffffff',
            text: darkMode? '#ffffff': '#1f1f1f',
          }
      }
  });

  const themeHandler = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", !darkMode)
  }

  return (
    <BrowserRouter basename={process.env.REACT_APP_HOME_PAGE}>
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userRole: role,
        login: login,
        logout: logout,
      }}
    >
    <ThemeProvider theme={theme}>
    <main>
        <Suspense fallback={<CircularProgress color="inherit" />}>
          <ResponsiveDrawer change={themeHandler} checked={darkMode}/>
        </Suspense>
      </main>
    </ThemeProvider>
    </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
