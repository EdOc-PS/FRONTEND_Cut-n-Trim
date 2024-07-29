import Scheduling from './pages/scheduling';
import Timetable from './pages/timetable';
import Header from './components/structure/header';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';




function Body(){
  return (
    <main className="">
      <Header></Header>
      <Outlet/>
    </main>
  );

}  


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='client' element ={<Body/>}>
        <Route path='scheduling' element ={<Scheduling/>} />
        <Route path='timetable' element ={<Timetable/>} />
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;