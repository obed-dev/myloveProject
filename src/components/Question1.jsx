import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnswers } from '../context/AnswerContext'; 

export const Question1 = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const { updateAnswer } = useAnswers();

  const navigate = useNavigate();

  const handleTextChange = (e) => setText(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = () => {
    updateAnswer('question1', { date, text }); 
    navigate('/question2');
  };

  return (
    <div className="container_question1">
      <h1>Cuando fue nuestra primera salida y donde?</h1>
      <img
        src="https://i.pinimg.com/originals/47/6b/85/476b85783b816fef1d2c56ebe247cc0f.gif"
        alt="ositos-gif"
        />
      <input type="date" value={date} onChange={handleDateChange} />
      <input type="text" placeholder="Escribe el lugar" value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Haz click aqui</button>
    </div>
  );
};
