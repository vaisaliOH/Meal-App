import MainPage from "./MainPage"
import {Route,Routes} from 'react-router-dom';
import MealInfo from "./MealInfo";

function App() {
  

  return (
    <>
    

    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/:mealid" element={<MealInfo/>}/>
    </Routes>

   
      
    </>
  )
}

export default App
