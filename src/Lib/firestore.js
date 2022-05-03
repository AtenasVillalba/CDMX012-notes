import { signOut, getAuth,  getDoc, getFirestore, doc, collection, addDoc } from "./Firebase-imports";
import { app } from "./firebase";
import { Navigate, useNavigate } from "react-router-dom";

export const db = getFirestore(app);


// export const userExist = async (uid) => {
//   const docReference = doc(db, "users", uid);
//   const result = await getDoc(docReference);

//   return result.data();
// };

export const logOut = async () => {
  const auth = getAuth();
  console.log(auth);
  await signOut(auth);
};



// export let addNote = async (title, note) => {
 
//   const auth = getAuth();
//   const user = auth.currentUser;
//   if (user) {
//     const uid = user.uid;
//     const navigate= useNavigate()

//     await addDoc(collection(db, "notes"), {
//       title,
//       note,
//       date: new Date(),
//       uid,
//     });
//     navigate("/notes")
//   } else {
//     // No user is signed in.
//   }
// };
// export const logOut = async () => {
//   try {
//     const auth = getAuth();
//     return await signOut(auth);
//   } catch {
//     console.log("Error al cerrar sesión");
//   }
// };
