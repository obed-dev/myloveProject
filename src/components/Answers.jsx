import React from 'react';
import { useAnswers } from "../context/AnswerContext";  
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Answers = () => {
  
  const { answers } = useAnswers(); 
  const navigation = useNavigate();


  // Respuestas correctas
  const correctAnswers = {
    question1: {
      date: "2024-09-21",  
      text: "concierto my chemical romance", 
    },
    question2: "2025-01-21", 
    question3: "menos de un mes" 
  };

  // Lógica para comparar las respuestas
  const isCorrect = {
    question1: answers.question1.date === correctAnswers.question1.date && answers.question1.text === correctAnswers.question1.text,
    question2: answers.question2 === correctAnswers.question2,
    question3: answers.question3 === correctAnswers.question3
  };

  const allCorrect = isCorrect.question1 && isCorrect.question2 && isCorrect.question3;

  // Función para mostrar el SweetAlert
  const showSweetAlert = () => {
    if (allCorrect) {
      Swal.fire({
        title: '¡Felicidades, ganaste muchos besitos!',
        text: 'Feliz San Valentín, te quiero mucho mi bebe 💘',
        imageUrl: 'https://i.pinimg.com/originals/5a/10/c3/5a10c3762d4da48261c9537ffb84325a.gif',
        confirmButtonText: '¡Gracias!',
        background: '#f8d7da', // Fondo bonito
        color: '#e53935', // Color del texto
        customClass: {
          title: 'text-3xl font-bold text-red-500', // Personaliza el título
          content: 'text-xl text-gray-800', // Personaliza el contenido
        },
      });
    }
  };
  
  const goback = () => { 
   navigation('/');
  }

  return (
    <div className="answers">
      <h1>Respuestas</h1>
      <div>
        <h3>Pregunta 1: ¿Cuándo fue nuestra primera cita y dónde?</h3>
        <p>Fecha: {answers.question1.date}</p>
        <p>Lugar: {answers.question1.text}</p>
        <p>{isCorrect.question1 ? "Correcta!" : "Incorrecta"}</p>
      </div>
      <div>
        <h3>Pregunta 2: ¿Cuál es la fecha en que iniciamos oficialmente como novios?</h3>
        <p>Fecha: {answers.question2}</p>
        <p>{isCorrect.question2 ? "Correcta!" : "Incorrecta"}</p>
      </div>
      <div>
        <h3>Pregunta 3: ¿Cuántos meses de novios tenemos oficialmente?</h3>
        <p>Respuesta: {answers.question3}</p>
        <p>{isCorrect.question3 ? "Correcta!" : "Incorrecta"}</p>
        <button type="button" onClick={ goback }>Volver a Jugar!</button>
      </div>
      
      {/* Mostrar el SweetAlert cuando todo es correcto */}
      {allCorrect && showSweetAlert()}
    </div>
  );
};
