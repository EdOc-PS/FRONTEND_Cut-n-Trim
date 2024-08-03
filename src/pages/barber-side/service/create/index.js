
import './index.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CreateService() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [durationTime, setDurationTime] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = {
      "barberShopID": "b1678a77-69c9-4895-a4e6-3a528f6e4297",
      "service": {
          "name": name,
          "price": parseFloat(price),
          "description": description,
          "duration": parseFloat(durationTime)
      }
    }
    
    fetch("http://localhost:8080/cutandtrim/barbershop/add-service" ,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(service)
    }).then((res) => { console.log(res) }).catch( e => console.log(e))
  }

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
        <form className='form_container' onSubmit={ handleSubmit }>
          <div class="input_body">
            <label>Name:</label>
            <div class="input_container">
              <i className="fi fi-ss-barber-shop"></i>
              <input type="text" name="" id="" value={name} onChange={ (e) => setName(e.target.value ) }/>
            </div>
          </div>


          <div className='same-place'>

            <div class="input_body">
              <label>Preço:</label>
              <div class="input_container">
                <i className="fi fi-sr-usd-circle"></i>
                <input type="text" name="" id="" value={price} onChange={ (e) => setPrice(e.target.value ) }/>
              </div>
            </div>

            <div class="input_body">
              <label>Tempo de duração:</label>
              <div className="input_container">
                <i className="fi fi-sr-clock-three"></i>
                <select className="select-service-time" value={durationTime} onChange={ (e) => setDurationTime(e.target.value ) }>
                  <option value="" disabled selected>Tempo de duração</option>
                  <option class="option-time" value="0.5">30 minutos</option>
                  <option class="option-time" value="1">1 hora</option>
                  <option class="option-time" value="1.5">1 hora e 30 minutos</option>
                  <option class="option-time" value="2">2 horas</option>
                </select>
              </div>
            </div>
          </div>
          <footer className='footer'>
            <button button className='btn_continue'>Create</button>
          </footer>
        </form> 
      </div>
    </section >

  );
}

