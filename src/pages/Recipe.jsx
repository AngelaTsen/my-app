import "../styles/style.scss";
import { useEffect, useState } from "react";
import { ButtonA4 } from "../components/Buttons/ButtonA4";
import {ListIngredients} from '../components/ListIngredients/ListIngredients'

export const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
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
            <div className="resipe__icon-tag">{resipe.strTags}</div>
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
          {/* <ButtonA4 text="See recipes"></ButtonA4> */}
        </div>
      ))}
    </div>
  );
};

export default Recipe;
