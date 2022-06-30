import { Route, Routes } from 'react-router-dom';
import Navbar from "./Pages/Shared/Navbar";
import ToDo from "./Pages/TaskRoute/ToDo";
import CompletedTask from "./Pages/TaskRoute/CompletedTask";
import Calender from "./Pages/TaskRoute/Calender";
import './App.css';
import Home from './Pages/TaskRoute/Home';

function App() {
  return (
    <div className="px-12 bg-primary min-h-screen ">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/completedTask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
