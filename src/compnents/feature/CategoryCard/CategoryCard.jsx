import "./CategoryCard.css"
function CategoryCard({ item }) {
  return (
    <div className="categoryCard col-sm-4 mt-3 ">


    <div className="  text-center container " >
    <img  className="card-card-img-top w-75" id="pic_pro" src={item.image} />

      <div className="card-card-body">

        <div className="card-title">
        <h1 >{item.name}</h1>

        </div>

      </div>
      <p className="card-text">{item.name}</p>

</div>
    </div>
  
  );
}

export default CategoryCard;
