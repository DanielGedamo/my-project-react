// import "./Context.css";
import  {createContext,useEffect, useState} from "react";
import ProfessionalsFetch from "../../Services/professionals";

export const professionalsContext = createContext();

function  ProfessionalsProvider ({children}){
  const [professionals,setProfessionals] = useState([]);
  useEffect (()=>{
    ProfessionalsFetch("professionals").then(result =>setProfessionals(result))
  },[])

  return (
    <professionalsContext.Provider value={{professionals,setProfessionals }}>
      {children}
    </professionalsContext.Provider>
  );
};
export default ProfessionalsProvider;

