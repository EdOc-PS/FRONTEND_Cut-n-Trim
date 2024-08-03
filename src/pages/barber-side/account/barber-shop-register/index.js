
import { Link } from 'react-router-dom';
import './index.css'


export default function BarberShop() {
  return (
    <section className="registerShop_body">
      <div className='header_container'>
        <div className='back_container'>
          <Link to={'/barber/account/singup'}>
            <button className='btn_back'><i class="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className='title_container'>
          <h1>One last more</h1>
          <p>Enter your barbershop information</p>
        </div>
      </div>

      <div className="registerShop_container">

        <form className='form_container'>
          <div class="input_body">
            <label>Name:</label>
            <div class="input_container">
              <i class="fi fi-sr-employee-man-alt"></i>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div class="input_body">
            <label>City</label>
            <div class="input_container">
              <i class="fi fi-sr-europe-flag"></i>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div className='same-place'>
            <div class="input_body">
              <label>Street</label>
              <div class="input_container">
                <i class="fi fi-sr-city"></i>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div class="input_body">
              <label>Number:</label>
              <div class="input_container">
                <i class="fi fi-sr-house-chimney-blank"></i>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>


        </form>

        <footer className='footer'>
          <Link to={'/barber/account/barber-shop'}><button button className='btn_continue'>Register</button></Link>
          <p>Already have a account? LINK</p>
        </footer>
      </div>
    </section >
  );

}



