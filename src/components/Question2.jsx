import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnswers } from '../context/AnswerContext'; 

export const Question2 = () => {

    
  const [fecha, setFecha] = useState('');
  const { updateAnswer } = useAnswers(); 

  const navigate = useNavigate();

  const handleSubmit = () => {
    updateAnswer('question2', fecha); 
    navigate('/question3');
  };

  return (
    <div className="container__question2">
      <h1>Cual es la fecha que iniciamos oficialmente como novios?</h1>
      <img src='https://i.pinimg.com/originals/8b/73/ba/8b73badf384ca6bc27d3d65127008145.gif' alt="couplePhoto"  />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <button onClick={handleSubmit}>Haz click aqui!</button>
    </div>
  );
};
