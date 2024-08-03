
import './index.css'
import { Link } from 'react-router-dom'

export default function CreateService() {
  return (
    <section className="createService_body">

      <div className='header_container'>
        <div className='back_container'>
          <Link to={'/barber/account/singup'}>
            <button className='btn_back'><i class="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className='title_container'>
          <h1>Create Service</h1>
          <p>Enter your barbershop information</p>
        </div>
      </div>

      <div className='createService_container'>
        <form className='form_container'>
          <div class="input_body">
            <label>Name:</label>
            <div class="input_container">
              <i className="fi fi-ss-barber-shop"></i>
              <input type="text" name="" id="" />
            </div>
          </div>


          <div className='same-place'>

            <div class="input_body">
              <label>Preço:</label>
              <div class="input_container">
                <i className="fi fi-sr-usd-circle"></i>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="input_body">
              <label>Tempo de duração:</label>
              <div className="input_container">
                <i className="fi fi-sr-clock-three"></i>
                <select className="select-service-time">
                  <option value="" disabled selected>Tempo de duração</option>
                  <option class="option-time">30 minutos</option>
                  <option class="option-time">1 hora</option>
                  <option class="option-time">1 hora e 30 minutos</option>
                  <option class="option-time">2 horas</option>
                </select>
              </div>
            </div>
          </div>
        </form>

         <footer className='footer'>
        <Link to={'/barber/account/barber-shop'}><button button className='btn_continue'>Create</button></Link>
      </footer>
      </div>

     
    </section >

  );
}

