import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc  } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Former");


class TutorialDataService {
  getAll() {
    return db;
  }
  
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Former", id);
    return await updateDoc(washingtonRef, {
        firstname: tutorial.firstname,
        lastname: tutorial.lastname
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Former", id);
    return await deleteDoc(washingtonRef);
  }


 /* const submit = (e) => {
    let data = {
    firstname: customerName,
    lastname: customerPrenom,
    }

  TutorialDataService.delete("samir")
    .then(() => {
      console.log("Created new item successfully!");
    })
    .catch((e) => {
      console.log(e);
    });
}
*/



}

export default new TutorialDataService();