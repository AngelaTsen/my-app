export const Category = ({ strCategoryThumb, strCategory}) => (
    <div>
      <img src={strCategoryThumb} alt="" />
      <h3>{strCategory}</h3>
    </div>
  );