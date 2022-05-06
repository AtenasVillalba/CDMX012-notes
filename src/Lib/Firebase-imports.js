// export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// export {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
export { getAuth, signInWithPopup, GoogleAuthProvider,  signOut, onAuthStateChanged } from "firebase/auth";
export { initializeApp } from "firebase/app";
export{ getDoc, getFirestore, doc, collection, addDoc, getDocs,  query, orderBy, limit,  onSnapshot, deleteDoc,  } from "firebase/firestore";
