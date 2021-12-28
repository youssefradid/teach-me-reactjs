import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Pack");


class PackService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { label, price, programRef } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "label": label,
              "price": price,
              "programRef": programRef,
            }
          )
    });
    return dataToShow;
  }
  
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Pack", id);
    return await updateDoc(washingtonRef, {
        label: tutorial.label,
        price: tutorial.price
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Pack", id);
    return await deleteDoc(washingtonRef);
  }

}

export default new PackService();