import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const UserForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setResults([]);
    setError("");

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.meals) {
          setError("Нічого не знайдено :(");
        } else {
          setResults(data.meals);
        }
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
        setError("Сталася помилка. Будь ласка, спробуйте пізніше.");
      });
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          id="input-search"
          placeholder="Введіть пошуковий запит"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="outline-secondary" onClick={handleSearch}>
        Search
      </Button>

      {results.length > 0 && (
        <div>
          <h3>Результати:</h3>
          {results.map((meal) => (
            <div key={meal.idMeal}>{meal.strMeal}</div>
          ))}
        </div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
};





// import { useState } from "react";
// import { Button } from "bootstrap";

// const defaultFormValue = {
//   firstName: "",
//   lastName: "",
//   age: "",
// };

// export const UserForm = () => {
//   const [formValue, setFormValue] = useState(defaultFormValue);

//   const inputChangeHandler = (value, formControlName) => {
//     setFormValue((state) => ({ ...formValue, [formControlName]: value }))};

//   const submitHandler = () => {
//     console.log(formValue);
//     setFormValue(defaultFormValue);
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="mb-3">
//         <label>
//           First Name
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "firstName")
//             }
//             value={formValue.firstName}
//             type="text"
//             placeholder="Enter Name"
//           />
//         </label>
//       </div>

//       <div className="mb-3">
//         <label>
//           Last Name
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "lastName")
//             }
//             value={formValue.lastName}
//             type="text"
//             placeholder="Enter Last Name"
//           />
//         </label>
//       </div> 
//       <div className="mb-3">
   
//           <input
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(Number(value), "age")
//             }
//             value={formValue.age}
//             type="number"
//             placeholder="Enter Age"
//           />
  
//       </div>

//       <button type="submit">Save</button>

//       <div class="multi-icon multi-firstIcon multi-searchIcon">
//         <svg class="multi-svg" viewBox="0 0 50 50">
//           <path class="multi-svg-path" d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"></path>
//           <path class="multi-svg-path" d="M32.682 31.267l5.98 5.98-1.414 1.414-5.98-5.98z"></path>
//         </svg>
//       </div>
//       <input
//             className="multi-input"
//             onChange={({ target: { value } }) =>
//               inputChangeHandler(value, "")
//             }
//             value={formValue.search}
//             type="text"
//             placeholder="Search meal ..."
//           />
//     </form>
    
//   );
// };
