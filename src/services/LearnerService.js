import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Leaner");


class LearnerService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { firstname, lastname, email, phone, password } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "phone": phone,
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

    const { firstname, lastname, email, phone, password } = docSnap.data();
    dataToShow = [
      {
        "id" : docSnap.id,
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "phone": phone,
        "password" : password
      }
    ];
  return dataToShow;
}

    
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Leaner", id);
    return await updateDoc(washingtonRef, {
        firstname: tutorial.firstname,
        lastname: tutorial.lastname,
        email: tutorial.email,
        phone: tutorial.phone
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Leaner", id);
    return await deleteDoc(washingtonRef);
  }
}

export default new LearnerService();