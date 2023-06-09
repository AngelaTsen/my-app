import "./App.scss";
import {UserForm} from "./components/UserForm/UserForm";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Blog } from "./components/Blog/Blog";


const App = () => {
  return (
    <>
      <Header class="header"></Header>
      <Banner></Banner>
      <UserForm></UserForm>
      <Blog></Blog>
    
    </>
  );
};



export default App;
