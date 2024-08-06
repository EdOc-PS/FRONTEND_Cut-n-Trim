import Scheduling from './pages/scheduling';
import Timetable from './pages/timetable';
import Header from './components/structure/header';
import SingUp from './pages/barber-side/account/singup';
import Login from './pages/barber-side/account/login';
import BarberShop from './pages/barber-side/account/barber-shop-register';
import CreateService from './pages/barber-side/service/create';
import UpdateService from './pages/barber-side/service/update';
import ListServices from './pages/barber-side/service/list';
import Account from './pages/barber-side/account';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';





function Body() {
  return (
    <main className="">
      <Header></Header>
      <Outlet />
    </main>
  );

}


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='client' element={<Body />}>
          <Route path='scheduling' element={<Scheduling />} />
          <Route path='timetable' element={<Timetable />} />
        </Route>

        <Route path='barber'>
          <Route path='account' element={<Account />} />
          <Route path='singup' element={<SingUp />} />
          <Route path='barber-shop' element={<BarberShop />} />
          <Route path='login' element={<Login />} />

          <Route path='service' >
            <Route path='create' element={<CreateService />} />
            <Route path='list' element={<ListServices />} />
            <Route path='update/:id' element={<UpdateService />} />
          </Route>
        </Route>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
