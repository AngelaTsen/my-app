import "./Header.scss";
import { UserForm } from "../UserForm/UserForm";
import { ButtonA1 } from "../Buttons/ButtonA1";

export const Header = ({ children }) => (
  <header className="header main-banner">
    {children}
    <div className="header__container">
      <div className="logo-block">
        <img src="../../images/logo.png" alt="logo" />
      </div>
      <div className="right-blocks">
        <ButtonA1 text="Breakfast" />
        <ButtonA1 text="Starter" />
        <ButtonA1 text="Seafood" />
        <ButtonA1 text="Vegan" />
        <ButtonA1 text="Dessert" />
        {/* <div className="right-blocks__icon">Starter</div>
        <div className="right-blocks__icon">Seafood</div>
        <div className="right-blocks__icon">Vegan</div>
        <div className="right-blocks__icon">Dessert</div> */}
      </div>
    </div>

    <UserForm></UserForm>
  </header>
);
