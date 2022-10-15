import React, { useContext } from "react";
import { professionalsContext } from "../../../../context/Context/Context";
import CategoryCard from "../../CategoryCard/CategoryCard";

function Professionals() {
  const { professionals } = useContext(professionalsContext);
  console.log(professionals);
  return (
    <>
      <div className=" text-center">
        <h1>categorytsad</h1>
      </div>

      <div className="container-fluid d-flex justify-content-center mb-5 ">
        <div className="row justify-content-center">
          {professionals.map((item ) => (
            <CategoryCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Professionals;
