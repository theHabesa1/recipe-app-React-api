import { BrowserRouter } from "react-router-dom";
import Category from "./Component/Category";
import Pages from "./Pages/Pages";
import Search from "./Component/Search";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </div>
  );
}

export default App;
