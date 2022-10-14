// import "./CategoryCard.css";

function CategoryCard(Professionals) {
const {picture ,hader} = Professionals;
  return (
    <div className="category-card">
      <h1>{hader}</h1>
      <img id = "pic_pro" src={picture} alt=""/>
    </div>
  );
};

export default CategoryCard;
