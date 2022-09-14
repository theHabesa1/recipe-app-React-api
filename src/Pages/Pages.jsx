import React from 'react'
import Home from './Home'
import { Route , Routes, useLocation  } from 'react-router-dom';
import Cuisine from './Cuisine';
import Recipes from './Recipes';
import Searched from './Searched';
import { AnimatePresence} from 'framer-motion'

function Pages() {
  const location = useLocation();

  return (
    <div>
       <AnimatePresence exitBeforeEnter> 
        <Routes location={location} key ={location.pathname}>
            <Route path="/" element ={<Home/> }/>
            <Route path="/cuisine/:type" element ={<Cuisine/> }/>
            <Route path="/searched/:search" element ={<Searched/> }/>
            <Route path="/recipe/:name" element ={<Recipes/> }/>

        </Routes>

        </AnimatePresence>
        
    </div>
  )
}

export default Pages