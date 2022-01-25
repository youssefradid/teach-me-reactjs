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
      const { firstname, lastname, email, specialisation, password , cv} = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "specialisation": specialisation,
              "cv" : cv,
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

    const { firstname, lastname, email, specialisation, password , cv} = docSnap.data();
    dataToShow = [
      {
        "id" : docSnap.id,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "specialisation": specialisation,
        "cv": cv,
        "password" : password
      }
    ];
  return dataToShow;
}

  create = async (former) => {
    return  await addDoc(db, former);
  }

  update = async (former,id) => {
    const washingtonRef = doc(database, "Former", id);
    return await updateDoc(washingtonRef, {
        firstname: former.firstname,
        lastname: former.lastname,
        email: former.email,
        specialisation : former.specialisation,
        cv : former.cv
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Former", id);
    return await deleteDoc(washingtonRef);
  }

}

export default new LearnerService();