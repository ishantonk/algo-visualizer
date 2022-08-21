import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from './components/appNavbar';
import Home from './pages/home';
import PathfindingVisualizer from './pages/pathfinding/pathfindingVisualizer';
import SearchingVisualizer from './pages/searching/searchingVisualizer';
import SortingVisualizer from './pages/sorting/sortingVisualizer';


function App() {
  return (
    <div className="App bg-[#f8fafc] flex flex-col w-screen">

      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/searching" element={<SearchingVisualizer />} />
          <Route path="/pathfinding" element={<PathfindingVisualizer />} />
          <Route path="*" element={<div className='flex justify-center items-center font-bold text-5xl h-96'>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
