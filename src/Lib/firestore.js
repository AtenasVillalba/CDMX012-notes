import { getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "./firebase";

export const db = getFirestore(app);

export const userExist = async (uid) => {
  const docReference = doc(db, "users", uid);
  const result = await getDoc(docReference);

  return result.exists();
};
