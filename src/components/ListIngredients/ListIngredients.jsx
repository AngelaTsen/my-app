import React, { useState, useEffect } from 'react';
import "./ListIngredients.scss";

export const ListIngredients = ({ idMeal }) => {
  const [ingredients, setIngredients] = useState([]);
  const [showPopup, setShowPopup] = useState(false); //  попап

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        const ingredientsList = [];

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

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='list'>
      <h2 className='list__h2'>Ingredients:</h2>
      <p className='list__p'>Check what you have:</p>
      {ingredients.map((ingredient, index) => (
        <div key={index} className='list__round'>
          <input className='list__inp' type="checkbox" id={`ingredient-${index}`} />
          <label className='list__lab' htmlFor={`ingredient-${index}`}>
            {ingredient.ingredient} - <b>{ingredient.measure}</b>
          </label>
        </div>
      ))}
      <button className="popup-button" onClick={handlePopupToggle}>Show list</button>

      {showPopup && (
        <div className="popup">
          <h3 className='popup-h3'>You need to buy:</h3>
          <ul>
            {ingredients
              .filter((ingredient, index) => !document.getElementById(`ingredient-${index}`).checked)
              .map((ingredient, index) => (
                <li key={index} className="popup-li">
                  {ingredient.ingredient} - {ingredient.measure}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
