import { useNavigate  } from "react-router-dom";
import './App.css'



function App() {
 

  const navigate = useNavigate();

const questions = () => { 
    navigate('/question1');
}

  return (
    <> 
    <div className="body">

      <h1>En este dia tan especial he creado algo para que recuerdes que te quiero mucho! ❤️ </h1>
      <p>He creado un pequeño juego de preguntas acerca de nosotros! :3</p>
      <img src="https://i.pinimg.com/originals/be/31/6c/be316ce5103630ab71a91f94c61e1c8b.gif" alt="ositos-cariñosos"  />
      <button type="button" onClick={questions} > Haz click aqui </button>
    </div>

    </>
  )
}

export default App
