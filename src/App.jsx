import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import TestCanvas from './pages/TestCanvas';
import { AppProvider } from './hooks/AppContext';

function App() {
  return (
    <AppProvider>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/búsqueda/:word" element={<Search/>}/>
          <Route path="/test" element={<TestCanvas/>}/>
        </Routes>
      </div>
    </AppProvider>

  );
}

export default App;
