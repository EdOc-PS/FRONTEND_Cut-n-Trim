

import { Link } from 'react-router-dom';
import './index.css'


export default function SingUp() {
  return (

    <section className="singup_body">
      <div className='header_container'>
        <div className='back_container'>
          <Link to={'/barber/account/barber-shop'}>
            <button className='btn_back'><i class="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className='title_container'>
          <h1>Register</h1>
          <p>Enter your personal information</p>
        </div>
      </div>

      <div className="singup_container">
        <form className='form_container'>
          <div class="input_body">
            <label>Name:</label>
            <div class="input_container">
              <i class="fi fi-sr-employee-man-alt"></i>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div class="input_body">
            <label>Email:</label>
            <div class="input_container">
              <i class="fi fi-sr-envelope"></i>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div class="input_body">
            <label>Password:</label>
            <div class="input_container">
              <i class="fi fi-sr-shield"></i>
              <input type="password" name="" id="" />
              <i class="fi fi-sr-eye"></i>
            </div>
          </div>

          <div class="input_body">
            <label>Repeat password:</label>
            <div class="input_container">
              <i class="fi fi-sr-shield"></i>
              <input type="password" name="" id="" />
              <i class="fi fi-sr-eye"></i>
            </div>
          </div>

        </form>

        <footer className='footer'>
          <Link to={'/barber/account/barber-shop'}><button button className='btn_continue'>Continue</button></Link>
          <p>Already have a account? LINK</p>
        </footer>
      </div>
    </section >
  );

}

