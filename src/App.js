import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.scss";
// import {UserForm} from "./components/UserForm/UserForm";
import { Header } from "./components/Header/Header";
import { SliderMy } from "./components/SliderMy/SliderMy";
// import { Blog } from "./components/Blog/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { Catalog } from "./pages/Сatalog";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
    
    <BrowserRouter>

      <Header class="header"></Header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes> 
    
      <div className="title">Сhoose a dish that you like:</div>
      <SliderMy></SliderMy>

    </BrowserRouter>
    <Footer> </Footer>
   
    </>
  );
};

export default App;
