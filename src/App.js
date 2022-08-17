import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppNavbar from './components/appNavbar';
import Home from './pages/home';
import SearchingVisualizer from './pages/searching/searchingVisualizer';
import SortingVisualizer from './pages/sorting/sortingVisualizer';


function App() {
  return (
    <div className="App bg-[#f8fafc] flex flex-col w-screen h-screen">

      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/searching" element={<SearchingVisualizer />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
