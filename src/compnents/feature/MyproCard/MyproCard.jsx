import "./MyproCard.css";
import React from "react";

function MyproCard({pro}) {
  return (
    <div className="categoryCard col-sm-4 mt-3 ">
      <div className="  text-center container ">
        <img className="card-card-img-top w-75" id="pic_pro"  />
        <div className="card-card-body">
          <div className="card-title">
            <img src={pro.image} alt="" />
           <h5>{pro.fullName}</h5>
           <h6>{pro.Rating}</h6>
           <p>{pro.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyproCard;
