import { BrowserRouter } from "react-router-dom";
import Category from "./Component/Category";
import Pages from "./Pages/Pages";
import Search from "./Component/Search";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/'}>አንብላ</Logo>
    </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:1.5rem;
  font-weight:400;
  font-family:'Lobster Two' ,cursive;

`
const Nav = styled.div`
  display: flex;
  padding:4rem,0rem;
  justify-content: felx-start;
  align-items: center;
  svg{
    font-size:2rem;
  }
`
export default App;
