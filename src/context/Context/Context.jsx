// import "./Context.css";
import  {createContext,useEffect, useState} from "react";
import {proData} from "../../Services/pros"
export const professionalsContext = createContext();

function  ProfessionalsProvider ({children}){
  const [professionals,setProfessionals] = useState([]);
  useEffect (()=>{
  setProfessionals(proData.items)
  },[])

  return (
    <professionalsContext.Provider value={{professionals,setProfessionals }}>
      {children}
    </professionalsContext.Provider>
  );
};
export default ProfessionalsProvider;

