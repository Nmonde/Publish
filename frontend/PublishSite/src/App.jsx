import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  );
};

export default App;
