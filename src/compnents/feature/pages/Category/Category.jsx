import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { professionalsContext } from "../../../../context/Context/Context";
import CategoryCard from "../../CategoryCard/CategoryCard";
import "./Category.css";

function Professionals() {
  const { professionals } = useContext(professionalsContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(professionals);
  useEffect(() => {
    setCategory(professionals);
  }, [professionals]);
  const onChange = (e) => {
    const results = professionals.filter((pro) =>
      pro.name.includes(e.target.value)
    );
    setCategory(results);
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="categoryDiv ">
        <div className=" text-center ">
          <h1>category</h1>
          <input
            type="text"
            placeholder="search.."
            value={search}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="container-fluid d-flex justify-content-center mt-0 ">
          <div className="row justify-content-center">
            {category.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Professionals;
