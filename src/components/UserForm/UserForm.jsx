import React, { useState } from "react";
import {Button, Form, Col, Row} from "react-bootstrap";
import "./UserForm.scss";
import { Catalog } from "../../pages/Сatalog";
import { ButtonA3 } from "../Buttons/ButtonA3";
import "../../styles/_variables.scss";

// import { SliderMyCard } from "../SliderMy/SliderMyCard/SliderMyCard";

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
          setError("Nothing found :(");
        } else {
          setResults(data.meals);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="formConteiner">
      <Form.Group className="mb-3 search-group">
        <div className="search-input-container">
          <Form.Control
            className="search-form"
            type="text"
            id="input-search"
            placeholder="Enter the name of the meal or ingredient"
            value={searchTerm}
            onChange={handleInputChange}
          />
           
        </div>
        {/* <ButtonA3 text="Search" for="search-form" variant="outline-secondary" onClick={handleSearch} /> */}

        <Button
          className="btn-search"
          variant="outline-secondary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form.Group>

      {results.length > 0 && (
        <div>
          <h3>Результати:</h3>
          <Row>
            {results.map((item) => (
              <Col key={item.idMeal} xs={6} md={4} lg={3}>
                <Catalog
                  strMeal={item.strMeal}
                  strCategory={item.strCategory}
                  strMealThumb={item.strMealThumb}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
};
