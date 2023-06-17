import React, { useState, useEffect } from "react";
import { CardMy } from "../components/CardMy/CardMy";
import "../components/SliderMy/SliderMy.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Form, Col, Row } from "react-bootstrap";

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("search");
    setSearchTerm(searchTermFromUrl || "");
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    setResults([]);
    setError("");

    if (searchTerm === "") {
      setError("Enter search request");
      return;
    }

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
    <div className="">
      {results.length > 0 && (
        <div>
          <h3>Результати:</h3>
          <Row>
            {results.map((item) => (
              <Col key={item.idMeal} xs={6} md={4} lg={3}>
                <CardMy
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
