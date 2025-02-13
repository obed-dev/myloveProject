import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const AnswersContext = createContext();

// Proveedor del contexto
export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const updateAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  return (
    <AnswersContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </AnswersContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAnswers = () => useContext(AnswersContext);
