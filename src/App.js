import "./App.scss";
import {UserForm} from "./components/UserForm/UserForm";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Blog } from "./components/Blog/Blog";
import { DataTable } from "./components/DataTable/DataTable";
import {router} from "./pages/router.config.js"


const App = () => {
  return (
    <>
      {/* <Header class="header"></Header>
      <Banner></Banner>
      <UserForm></UserForm>
      <Blog></Blog> */}
        {/* <DataTable></DataTable> */}
<RouterProvaider router = {router} />
    
    </>
  );
};



export default App;
