import { CircularProgress, ThemeProvider } from "@mui/material";
import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import Schedule from "./components/pages/Schedule";
import Speakers from "./components/pages/Speakers";
import Map from "./components/pages/Map";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/Login";
import Support from "./components/pages/Support";
import SignUp from "./components/pages/SignUp";
import Tutorial from "./components/pages/Tutorial";
import ResponsiveDrawer from "./Main";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
            mode: darkMode? "dark" : "light"
    }
  });

  let routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/tabs/schedule" />} />
      <Route path="/tabs/schedule" element={<Schedule />} />
      <Route path="/tabs/speakers" element={<Speakers />} />
      <Route path="/tabs/map" element={<Map />} />
      <Route path="/tabs/about" element={<AboutUs />} />
      <Route path="/tabs/login" element={<Login />} />
      <Route path="/tabs/support" element={<Support />} />
      <Route path="/tabs/signup" element={<SignUp />} />
      <Route path="/tabs/tutorial" element={<Tutorial />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    )

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <ResponsiveDrawer checked={darkMode} change={()=>setDarkMode(!darkMode)}/>
    <main>
        <Suspense fallback={<CircularProgress color="inherit" />}>
          {routes}
          <ResponsiveDrawer change={()=>setDarkMode(!darkMode)} checked={darkMode}/>
        </Suspense>
      </main>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
