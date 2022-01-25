import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Session");


class SessionService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { endDate, programRef, startDate } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "endDate": endDate,
              "programRef": programRef,
              "startDate": startDate,
            }
          )
    });
    return dataToShow;
  }
  
  getById = async (id) => {
    let dataToShow = [];
    const docRef = doc(db, id.trim());
    const docSnap = await getDoc(docRef);
  
      const { endDate, programRef, startDate } = docSnap.data();
      dataToShow.push(
        {
          "id" : docSnap.id,
          "endDate": endDate,
          "programRef": programRef,
          "startDate": startDate,
        }
      )
    return dataToShow;
  }

  
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Session", id);
    return await updateDoc(washingtonRef, {
        endDate: tutorial.endDate,
        startDate: tutorial.startDate
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Session", id);
    return await deleteDoc(washingtonRef);
  }
}

export default new SessionService();