import React, { useState, useEffect } from "react";
import { CardMy } from "../components/CardMy/CardMy";
// import "../components/SliderMy/SliderMy.scss";
import "../styles/style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Form, Col, Row } from "react-bootstrap";

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("search");
    const categoryTermFromUrl = urlParams.get("category");
    setSearchTerm(searchTermFromUrl || "");
    setCategoryTerm(categoryTermFromUrl || "");
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, categoryTerm]);

  const handleSearch = () => {
    setResults([]);
    setError("");

    if (searchTerm === "" && categoryTerm === "") {
      setError("Enter search request");
      return;
    }

    const apiUrl = categoryTerm
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryTerm}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;


    fetch(apiUrl)
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
    <div className="wrapper">
      {results.length > 0 && (
        <div>
          <h3>{categoryTerm ? `Category: ` + categoryTerm : "Results:"}</h3>
          <Row>
            {results.map((item) => (
              <Col key={item.idMeal} xs={7} md={5} lg={3}>
                <CardMy
                  idMeal={item.idMeal}
                  strMeal={item.strMeal}
                  strCategory={categoryTerm ? categoryTerm : item.strCategory} 
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
