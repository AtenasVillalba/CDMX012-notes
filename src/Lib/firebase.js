import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  initializeApp,
} from "./Firebase-imports";
import { firebaseConfig } from "./firebase-config";
import { Navigate } from "react-router-dom";

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// funcion se activa al hacer click en logo de google
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    console.log(auth.currentUser.uid);
    Navigate ("/notes")
  } catch (error) {
    console.error(error);
  }
};

// //esta funcion se ejecuta dentro de handleOnClick() para generar al usuario que ingresa con google
// const signInWithGoogle = async (googleProvider) => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };


// import { useHistory } from "react-router-dom";


// let history= useHistory()
// function clickButtonGoogle(){
//   console.log("funciona ruta");
//  return history.replace("/notes")
// }
