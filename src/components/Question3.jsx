import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnswers } from '../context/AnswerContext'; 

export const Question3 = () => {

    
  const [text, setText] = useState('');
  const { updateAnswer } = useAnswers(); 

  const navigate = useNavigate();

  const handleSubmit = () => {
    updateAnswer('question3', text); 
    navigate('/answers');
  };

  return (
    <div className="container__question3">
      <h1>Cuantos meses de novios tenemos oficialmente?</h1>
      <img src="https://media.tenor.com/1lBrvKvWjFQAAAAM/bear-kiss.gif" alt="" srcset="" />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe tu respuesta aqui" />
      <button onClick={handleSubmit}>Haz click aqui</button>
    </div>
  );
};
