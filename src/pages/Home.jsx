import "../styles/style.scss";
import { useEffect, useState } from "react";

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
          <a key={category.idCategory} href={`/catalog?category=${category.strCategory}`}>
            <img
              className="categories__img"
              src={category.strCategoryThumb}
              alt={category.strCategory}
            />
            <h3 className="categories__h3">{category.strCategory}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;