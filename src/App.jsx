import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import './index.css'
import { Destination } from "./components/Destination/Destination";
import { Crew } from "./components/Crew/Crew";
import { Technology } from "./components/Technology/Technology";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/destination" exact element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="technology" element={<Technology />}></Route>
        </Routes>
    </div>
  );
}

export default App;
