import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ContentPage from './components/ContentPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/content" element={<ContentPage />} />
    </Routes>
  );
};

export default App;
