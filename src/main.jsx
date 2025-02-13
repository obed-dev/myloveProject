import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router/AppRouter.jsx';
import { AnswersProvider } from './context/AnswerContext.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnswersProvider>
        <AppRouter />
      </AnswersProvider>
    </BrowserRouter>
  </StrictMode>
);
