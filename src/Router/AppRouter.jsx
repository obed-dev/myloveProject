import { Routes , Route } from 'react-router-dom'
import { Answers, Question1 , Question2 , Question3 } from '../components/index'
import App from '../App'

export const AppRouter = () => {
  
  
  
    return (
         <Routes>
             <Route path='/' element={ <App /> }  />
             <Route path='/question1' element={ <Question1 /> }  />
             <Route path='/question2' element={ <Question2 /> }  />
             <Route path='/question3' element={ <Question3 /> }  />
             <Route path='/answers' element={ <Answers /> }  />
         </Routes>
  )
}
