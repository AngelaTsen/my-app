import "../styles/style.scss";
import { useEffect, useState } from "react";
import { ButtonA4 } from "../components/Buttons/ButtonA4";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  return (
    <div className="home">
      <div className="text wrapper">
        <h1 className="text__h1">Simple recipes for delicious dishes</h1>
        <p className="text__p">
          Recipes for first and second courses, as well as desserts and salads.
          Thousands of ideas for what to cook for breakfast or dinner. Read,
          cook, enjoy. And don't forget to share your recipes.
        </p>
      </div>
      <h2 className="home__h2 wrapper">Categorys</h2>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.idCategory}>
            <img
              className="categories__img"
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />
            <h3 className="categories__h3">{category.strCategory}</h3>
            {/* <ButtonA4 text ="See recipes"></ButtonA4> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// import "../styles/style.scss";
// import { useEffect, useState } from "react";
// import { Category} from "../components/Category/Category";

// export const Home = () => {
//   const [blogData, setBlogData] = useState([]);

//   useEffect(() => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((responseData) => setBlogData(responseData.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="home">
//       <h1 className="home-h1">Simple recipes for delicious dishes</h1>
//       <p className="home-p">
//         Recipes for first and second courses, as well as desserts and salads.
//         Thousands of ideas for what to cook for breakfast or dinner. Read, cook,
//         enjoy. And don't forget to share your recipes.
//       </p>

//       {blogData.map((item) => (
//         <Category
//           key={item.idCategory}
//           strCategoryThumb={item.strCategoryThumb}
//           strCategory={item.strCategory}
//         />
//       ))}
//     </div>
//   );
// };

// export default Home;
