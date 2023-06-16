import React, { useState, useEffect } from 'react';
import "./ListIngredients.scss"

export const ListIngredients = ({ idMeal }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        const ingredientsList = [];

        // Collect non-empty ingredient and measure pairs
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
            ingredientsList.push({ ingredient, measure });
          }
        }

        setIngredients(ingredientsList);
      })
      .catch((error) => console.error("An error occurred:", error));
  }, [idMeal]);

  return (
    <div className='list'>
      <h2 className='list__h2'>Ingredients:</h2>
      {ingredients.map((ingredient, index) => (
         <div key={index} className='list__round'>
         
          <input className='list__inp' type="checkbox" id={`ingredient-${index}`} />
          <label className='list__lab' htmlFor={`ingredient-${index}`}>
            {ingredient.ingredient} - <b>{ingredient.measure}</b>
          </label>
          </div>
      
      ))}
    </div>
  );
};

export default ListIngredients;



