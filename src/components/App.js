import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from 'react-router-dom';
import "../styles/style.css";
import AllPuppies from "./AllPuppies";
import SinglePuppy from "./SinglePuppies";

const App = () => {
  const [puppies, setPuppies] = useState([])

  return (
    <>
      <main>
        <Routes>
          <Route path="/" exact element={<AllPuppies puppies={puppies} setPuppies={setPuppies} />} />
          <Route path="/puppy" element={<SinglePuppy />} />
        </Routes>
      </main>
    </>
  )
}

export default App;