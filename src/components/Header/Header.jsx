import "./Header.scss"

export const Header = ({children}) => <header className="header">{children}
<div className="header__container">
          <div className="left-block"></div>
          <div className="right-blocks">
            <div className="right-blocks__icon">Breakfast</div>
            <div className="right-blocks__icon">Starter</div>
            <div className="right-blocks__icon">Seafood</div>
            <div className="right-blocks__icon">Vegan</div>
            <div className="right-blocks__icon">Dessert</div>
          </div>
        </div>

</header>
