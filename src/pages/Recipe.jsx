import "../styles/style.scss";
import { useEffect, useState } from "react";
import {ListIngredients} from '../components/ListIngredients/ListIngredients'

export const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idMeal = urlParams.get("id");

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals))
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  return (
    <div className="resipe wrapper">
      {recipes.map((resipe) => (
        <div key={resipe.idMeal}>
          <div className="resipe__icon ">
            <div className="resipe__icon-tag">{resipe.strCategory}</div>
            <div className="resipe__icon-tag">{resipe.strArea}</div>
          </div>
          <h1 className="resipe__h1 ">{resipe.strMeal}</h1>
          <img
            className="resipe__img "
            src={resipe.strMealThumb}
            alt={resipe.strCategory}
          />
        
            <h2 className="resipe__h2">Instructions:</h2>
            <p className="resipe__p">{resipe.strInstructions}</p>
         
            <div className="categories">
      {recipes.map((recipe) => (
        <div key={recipe.idCategory}>
          <ListIngredients idMeal={recipe.idMeal} />
        </div>
      ))}
    </div>          
    <div className="resipe__video wrapper">
  <iframe
  className="resipe__video-iframe "
   
    src={`https://www.youtube.com/embed/${resipe.strYoutube.slice(-11)}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
