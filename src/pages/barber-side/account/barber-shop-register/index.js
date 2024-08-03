
import { Link } from 'react-router-dom';
import './barberShop.css'
import { useState } from 'react';
import { Post } from '../../../../core/service/post.js';

export default function BarberShop() {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhod, setNeighborhod] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBarberShop = {
      "name": name,
      "city": city,
      "street": street,
      "number": number,
      "openingTime": 9,
      "closingTime": 18,
      "lunchTimeStart": 12,
      "lunchTimeEnd": 13,
      "cep": cep,
      "neighborhod": neighborhod
    }

    Post('localhost:8080/cutandtrim/barber/register', newBarberShop);
  }

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
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div class="input_body">
            <label>City</label>
            <div class="input_container">
              <i class="fi fi-sr-europe-flag"></i>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
          </div>
          
          <div className='same-place'>
            <div class="input_body">
              <label>CEP:</label>
              <div class="input_container">
                <i class="fi fi-sr-city"></i>
                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
              </div>
            </div>

            <div class="input_body">
              <label>Neighborhod: </label>
              <div class="input_container">
                <i class="fi fi-sr-house-chimney-blank"></i>
                <input type="text" value={neighborhod} onChange={(e) => setNeighborhod(e.target.value)} />
              </div>
            </div>
            
          </div>

          <div className='same-place'>
            <div class="input_body">
              <label>Street</label>
              <div class="input_container">
                <i class="fi fi-sr-city"></i>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
              </div>
            </div>

            <div class="input_body">
              <label>Number:</label>
              <div class="input_container">
                <i class="fi fi-sr-house-chimney-blank"></i>
                <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
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



