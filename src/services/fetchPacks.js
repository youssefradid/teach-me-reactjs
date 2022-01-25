import { useState, useEffect } from "react";
import PackService from "../services/PackService";
import ProgramService from "../services/ProgramService";

const UseFetch = () => {
    const dataToShow = [];
  
    const [packsData, setPacksData] = useState([]);

    useEffect(() => {

    PackService.getAll().then(function(pack) {
      
      pack.forEach(doc => {

      if(doc.programRef){

          ProgramService.getById(doc.programRef.id).then(function(program) {

            program.forEach(prog => {
              
             dataToShow.push( [ Object.assign({}, prog, doc)] );
             
             const combined = dataToShow.reduce((acc, result) => { 
              return acc.concat(result)
              }, []);
        
            setPacksData(
              combined
            )
             
            })
            
        })
      }

  })

})

}, []);

  return [packsData];
};

export default UseFetch;