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
import CreateNotesView from "./Routes/CreateNotesView";
import { onAuthStateChanged } from "./Lib/Firebase-imports";
import { useEffect, useState } from "react";
import { auth } from "./Lib/firebase";
import EditNotesView from "./Routes/EditNotesView";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      console.log("seteo login:true");
      setIsLogedIn(true);
    } else {
      console.log("seteo login:false");
      setIsLogedIn(false);
    }
  }, [onAuthStateChanged]);

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      console.log("seteo login:true");
      setIsLogedIn(true);
    } else {
      console.log("seteo login: onauth false");
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
          path="/notes"
          element={isLogedIn ? <NotesView /> : <Navigate to="/" replace />} //Operador ternario condicion ? true : false
        />
        <Route
          path="/create"
          element={
            isLogedIn ? <CreateNotesView /> : <Navigate to="/" replace />
          } //Operador ternario condicion ? true : false
        />

        <Route
          path="/edit/:id"
          element={isLogedIn ? <EditNotesView /> : <Navigate to="/" replace />} //Operador ternario condicion ? true : false
        />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
