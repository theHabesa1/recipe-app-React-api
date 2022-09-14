import Popular from "../Component/Popular";
import Veggie from "../Component/Veggie";
import { motion } from "framer-motion";

import React from 'react'

function Home() {
  return (
    <div>
      <motion.div
         animate={{opacity:1}}
         initial={{opacity:0}}
         exit={{opacity:0}}
         transition={{duration:0.5}}
      >
        <Popular/>
        <Veggie/>
      </motion.div>
    </div>
  )
}

export default Home