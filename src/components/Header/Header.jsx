import React, { useEffect } from "react";
import { UserForm } from "../UserForm/UserForm";
import { ButtonA1 } from "../Buttons/ButtonA1";
import "./Header.scss";


export const Header = ({ children }) => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    hamburger.addEventListener("click", mobileMenu);

    const navLink = document.querySelectorAll(".nav__link");

    const closeMenu = () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    };

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLink.forEach((n) => n.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <header className="header main-banner">
      {children}
      <div className="header__container wrapper">
        <div className="logo-block">
          <img src="../../../public/assets/images/logo.png" alt="logo" />
        </div>
        <nav>
          <ul className="navbar right-blocks">
                 {/* <div className="right-blocks__icon">Starter</div>
        <div className="right-blocks__icon">Seafood</div>
        <div className="right-blocks__icon">Vegan</div>
        <div className="right-blocks__icon">Dessert</div> */}
            <li>
              <ButtonA1 text="Breakfast" />
            </li>
            <li>
              <ButtonA1 text="Starter" />
            </li>
            <li>
              <ButtonA1 text="Seafood" />
            </li>
            <li>
              <ButtonA1 text="Vegan" />
            </li>
            <li>
              <ButtonA1 text="Dessert" />
            </li>
          </ul>
          <div className="hamburger">
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
          </div>
        </nav>
      </div>
      <UserForm></UserForm>
    </header>
  );
};
