// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundView from "./Routes/NotFoundView";
import LoginView from "./Routes/LoginView";
import NotesView from "./Routes/NotesView";
// import { onAuthStateChanged } from "firebase/auth";
// import { useState } from "react";
// import { auth } from "./Lib/firebase";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  // const [currentUser, SetCurrentUser] = useState(null);
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     SetCurrentUser(user);
  //     navigate("/notes");
  //   } else {
  //     SetCurrentUser(null);
  //     navigate("/");
  //   }
  // });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="notes" element={<NotesView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
