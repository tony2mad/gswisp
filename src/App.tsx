import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import InterestForm from './pages/InterestForm';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/interest-form" element={<InterestForm />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;