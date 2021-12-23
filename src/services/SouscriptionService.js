import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Souscription");


class SouscriptionService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { sessionRef, packRef, learnerRef, paied } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "sessionRef": sessionRef,
              "packRef" : packRef,
              "learnerRef" : learnerRef,
              "paied" : paied
            }
          )
    });
    return dataToShow; 
  }
  
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Souscription", id);
    return await updateDoc(washingtonRef, {
        firstname: tutorial.firstname,
        lastname: tutorial.lastname
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Souscription", id);
    return await deleteDoc(washingtonRef);
  }

}

export default new SouscriptionService();