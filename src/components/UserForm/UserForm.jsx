import React, { useState, useEffect } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "./UserForm.scss";
import { Catalog } from "../../pages/Сatalog";
import { CardMy } from "../../components/CardMy/CardMy";
import { ButtonA3 } from "../Buttons/ButtonA3";
import "../../styles/_variables.scss";

export const UserForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get("search");
    setSearchTerm(searchValue || "");
  }, [location.search]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    window.location.href=(`/catalog?search=${encodedSearchTerm}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="formContainer">
      <Form.Group className="mb-3 search-group">
        <div className="search-input-container">
          <Form.Control
            className="search-form"
            type="text"
            id="input-search"
            placeholder="Enter the name of the meal or ingredient"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          className="btn-search"
          variant="outline-secondary"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form.Group>

      {/* Остальной код */}
    </div>
  );
};
