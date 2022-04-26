import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// funcion se activa al hacer click en logo de google
export const handleOnClick = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithGoogle(googleProvider);
};


  //esta funcion se ejecuta dentro de handleOnClick() para generar al usuario que ingresa con google
  const signInWithGoogle = async (googleProvider) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

// export const singInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   console.log({ auth });
//   console.count();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;

//       const user = result.user;
//       // ...
//       console.log({ user });
//       const navigate = useNavigate();
//       navigate("/Register");
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log("Error catch", errorCode || errorMessage || email);

//       // ...
//     });
// };
