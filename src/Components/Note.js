import { collection, getDocs, onAuthStateChanged  } from "../Lib/Firebase-imports"; 
import { db } from "../Lib/firestore";
import { useEffect, useState } from "react";
import { auth } from "../Lib/firebase";



export default function Note() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  
  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      console.log("seteo login:true");
      setIsLogedIn(true);
      getNotes()
      console.log(getNotes);
    } else {
      console.log("seteo login:false");
      setIsLogedIn(false);
    }
  }, [onAuthStateChanged]);


  const getNotes =async()=>{

    const querySnapshot = await getDocs(collection(db, "notes"));
  querySnapshot.forEach((note) => {
  console.log(`${note.id} => ${note.data()}`);
});
  }
  return (
    <section>
      <section>
        <p></p>
        <img />
        <img />
      </section>
      <section>
        <h1></h1>
      </section>
    </section>
  );
}
