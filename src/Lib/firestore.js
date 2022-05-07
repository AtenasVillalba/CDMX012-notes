import {
  signOut,
  getAuth,
  getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from "./Firebase-imports";
import { app } from "./firebase";

export const db = getFirestore(app);

export const logOut = async () => {
  const auth = getAuth();
  console.log(auth);
  await signOut(auth);
};

export const addResource = async (resourceName, data) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const name = user.displayName
  if (!user) {
    return;
  }
  const uid = user.uid;

  return addDoc(collection(db, resourceName), { ...data, uid, email, name });
};

export const deleteNote = (id) => {
  console.log("funcion eliminar");
  deleteDoc(doc(db, "notes", id));
};
