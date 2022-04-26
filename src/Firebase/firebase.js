import { getAuth,signInWithPopup, GoogleAuthProvider } from "./Firebase-imports";
import { app } from "./firebase-config";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

export const singInWithGoogle = () => {

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      // ...
      const navigate = useNavigate();
      navigate("/Register");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);

      // ...
    });
};
