import { useContext } from "react";
// import "Category.css"
import {professionalsContext} from "../../../../context/Context/Context"
import CategoryCard from "../../CategoryCard/CategoryCard"

function Professionals() {
  const { professionals } = useContext(professionalsContext);

  return (
    <div className="professionals">
     
      {professionals?.map((professionalsItem) => <CategoryCard professionals={professionalsItem} />)}
    </div>
  );
};
export default Professionals;
