// export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// export {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
export { getAuth, signInWithPopup, GoogleAuthProvider,  signOut} from "firebase/auth";
export { initializeApp } from "firebase/app";
export{ getDoc, getFirestore, doc } from "firebase/firestore";

// export const logOut = async () => {
//   try {
//     const auth = getAuth();
//     return await signOut(auth);
//   } catch {
//     console.log("Error al cerrar sesión");
//   }
// };
