import firebase from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDoc , getDocs } from "firebase/firestore"; 
import { getFirestore, doc, onSnapshot, query, where } from "firebase/firestore";

const database = getFirestore();
const db = collection(database, "Program");


class ProgramService {

  getAll = async () => {
    let dataToShow = [];
    const Alldocs = await getDocs(db) 
    Alldocs.forEach((doc) => {
      const { description, goal, title } = doc.data();
          dataToShow.push(
            {
              "id" : doc.id,
              "description": description,
              "goal": goal,
              "title": title,
            }
          )
    });
    return dataToShow;
  }
  
  getById = async (id) => {
    let dataToShow = [];
    const docRef = doc(db, id.trim());
    const docSnap = await getDoc(docRef);
  
      const { description, title, goal } = docSnap.data();
      dataToShow = [
        {
          "id" : docSnap.id,
          "description": description,
          "title": title,
          "goal": goal,
        }
      ];
    return dataToShow;
  }

  
  create = async (tutorial) => {
    return  await addDoc(db, tutorial);
  }

  update = async (tutorial,id) => {
    const washingtonRef = doc(database, "Program", id);
    return await updateDoc(washingtonRef, {
        firstname: tutorial.firstname,
        lastname: tutorial.lastname
      });
  }

  delete = async (id) => {
    const washingtonRef = doc(database, "Program", id);
    return await deleteDoc(washingtonRef);
  }

}

export default new ProgramService();