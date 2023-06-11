import "./Header.scss";
import { UserForm } from "../UserForm/UserForm";

export const Header = ({ children }) => (
  <header className="header main-banner">
    {children}
    <div className="header__container">
      <div className="logo-block"><img src="../../images/logo.png" alt="logo" /></div>
      <div className="right-blocks">
        <div className="right-blocks__icon">Breakfast</div>
        <div className="right-blocks__icon">Starter</div>
        <div className="right-blocks__icon">Seafood</div>
        <div className="right-blocks__icon">Vegan</div>
        <div className="right-blocks__icon">Dessert</div>
      </div>
    </div>
    <UserForm></UserForm>
  </header>
);
