import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  initializeApp,
} from "./Firebase-imports";
import { firebaseConfig } from "./firebase-config";


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// funcion se activa al hacer click en logo de google
export const signInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
    console.log(auth.currentUser.uid);
  } catch (error) {
    console.error(error);
  }
};
