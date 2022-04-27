import { signOut, getAuth } from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "./firebase";

export const db = getFirestore(app);

export const userExist = async (uid) => {
  const docReference = doc(db, "users", uid);
  const result = await getDoc(docReference);

  return result.exists();
};

export const logOut = async () => {
  const auth = getAuth();
  console.log(auth);
  return await signOut(auth);
};

// export const logOut = async () => {
//   try {
//     const auth = getAuth();
//     return await signOut(auth);
//   } catch {
//     console.log("Error al cerrar sesión");
//   }
// };
