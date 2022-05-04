import {
  signOut,
  getAuth,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
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
  if (!user) {
    return;
  }
  const uid = user.uid;

  return addDoc(collection(db, resourceName), { ...data, uid });
};

// const getNotes = async () => {
//   const colletionNotes = collection(db, "notes");
//   const q = query(colletionNotes, orderBy("date"), limit(3));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((note) => {
//     console.log(`${note.id} => ${note.data().note}`);
//   });
// };
