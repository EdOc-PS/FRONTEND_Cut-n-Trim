

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Post } from '../../../../core/service/post.js';

import './index.css'


export default function SingUp() {

  const [name, setName] = useState('');
  const [email, setEmai] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      const newBarber = {
        "name": name,
        "email": email,
        "password": password,
      }

      Post('localhost:8080/cutandtrim/barber/register', newBarber);
    } else {
      console.log('bobo');

    }
  }


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

        <form className='form_container' onSubmit={handleSubmit}>
          <div class="input_body">
            <label>Name:</label>
            <div class="input_container">
              <i class="fi fi-sr-employee-man-alt"></i>
              <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div class="input_body">
            <label>Email:</label>
            <div class="input_container">
              <i class="fi fi-sr-envelope"></i>
              <input type="email" name="" value={email} onChange={(e) => setEmai(e.target.value)} />
            </div>
          </div>

          <div class="input_body">
            <label>Password:</label>
            <div class="input_container">
              <i class="fi fi-sr-shield"></i>
              <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} />
              <i class="fi fi-sr-eye"></i>
            </div>
          </div>

          <div class="input_body">
            <label>Repeat password:</label>
            <div class="input_container">
              <i class="fi fi-sr-shield"></i>
              <input type="password" name="" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
              <i class="fi fi-sr-eye"></i>
            </div>
          </div>


          <footer className='footer'>
            <button button className='btn_continue'>Continue</button>
            <p>Already have a account? LINK</p>
          </footer>
        </form>


      </div>
    </section >
  );

}

