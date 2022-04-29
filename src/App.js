// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import NotFoundView from "./Routes/NotFoundView";
import LoginView from "./Routes/LoginView";
import NotesView from "./Routes/NotesView";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Lib/firebase";
import { AuthContextProvider } from "./AboutContext/auth-context";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, [onAuthStateChanged]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogedIn ? <Navigate to="/notes" /> : <LoginView replace />}
        />
        <Route
          path="notes"
          element={isLogedIn ? <NotesView /> : <Navigate to="/" replace />} //Operador ternario condicion ? true : false
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
