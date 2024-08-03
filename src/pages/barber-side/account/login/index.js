

import { Link } from 'react-router-dom';
import './index.css'


export default function Login() {
  return (


    <section className="login_body">
      <div className='header_container'>
        <div className='back_container'>
          <Link to={'/barber/account/barber-shop'}>
            <button className='btn_back'><i class="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className='title_container'>
          <h1>Login</h1>
          <p>Enter your personal information</p>
        </div>
      </div>

      <div className="login_container">

        <form className='form_container'>
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
        </form>

        <footer className='footer'>
          <Link to={'/barber/account/barber-shop'}><button button className='btn_continue'>Continue</button></Link>
          <p>Already have a account? LINK</p>
        </footer>
      </div>
    </section >
  );

}
