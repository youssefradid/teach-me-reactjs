import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Former");


class LearnerService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { firstname, lastname, email, specialisation, password } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "specialisation": specialisation,
              "password" : password
            }
          )
    });
    return dataToShow;
  }
    
  getById = async (id) => {
  let dataToShow = [];
  const docRef = doc(db, id.trim());
  const docSnap = await getDoc(docRef);

    const { firstname, lastname, email, specialisation, password } = docSnap.data();
    dataToShow = [
      {
        "id" : docSnap.id,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "specialisation": specialisation,
        "password" : password
      }
    ];
  return dataToShow;
}

  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Former", id);
    return await updateDoc(washingtonRef, {
        firstname: tutorial.firstname,
        lastname: tutorial.lastname,
        email: tutorial.email,
        specialisation : tutorial.specialisation
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Former", id);
    return await deleteDoc(washingtonRef);
  }

}

export default new LearnerService();