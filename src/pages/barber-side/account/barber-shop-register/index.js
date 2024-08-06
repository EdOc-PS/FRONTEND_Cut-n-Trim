
import { Link } from 'react-router-dom';
import styles from './barberShop.module.css'
import { useState } from 'react';
import { Post } from '../../../../core/service/post.js';

export default function BarberShop() {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    var newBarberShop = {
      barber: {
        name: sessionStorage.getItem("barberName"),
        email: sessionStorage.getItem("barberEmail"),
        password: sessionStorage.getItem("barberPassword"),
      },
      barberShop: {
        name: name,
        city: city,
        state: state,
        street: street,
        number: number,
        openingTime: 9,
        closingTime: 18,
        lunchTimeStart: 12,
        lunchTimeEnd: 13,
        cep: cep,
        neighborhood: neighborhood
      }
    }

    Post('http://localhost:8080/cutandtrim/barber/register-brshp', newBarberShop)
      .then(jBody => {
        if (typeof jBody.id !== 'undefined') {
          window.location.href = 'http://localhost:3000/barber/service/list';
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });


  }

  return (
    <section className={styles.registerShop_body}>

      <div className={styles.header_container}>
        <div className={styles.back_container}>
          <Link to={'/barber/account/singup'}>
            <button className={styles.btn_back}><i className="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className={styles.title_container}>
          <h1>One last more</h1>
          <p>Enter your barbershop information</p>
        </div>
      </div>

      <div className={styles.registerShop_container}>

        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
            <div className={styles.input_body}>
              <label>Name:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-employee-man-alt"></i>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>City</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-europe-flag"></i>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>CEP:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-city"></i>
                  <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>
              </div>
            </div>

            <div className={styles.same_place}>

              <div className={styles.input_body}>
                <label>Neighborhood: </label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-house-chimney-blank"></i>
                  <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                </div>
              </div>
              <div className={styles.input_body}>
                <label>State</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-europe-flag"></i>
                  <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </div>
              </div>

            </div>

            <div className={styles.same_place}>
              <div className={styles.input_body}>
                <label>Street</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-city"></i>
                  <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                </div>
              </div>

              <div className={styles.input_body}>
                <label>Number:</label>
                <div className={styles.input_container}>
                  <i className="fi fi-sr-house-chimney-blank"></i>
                  <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
              </div>

            </div>
          </div>
          <footer className={styles.footer}>
            <button className={styles.btn_continue}>Register</button>
          </footer>

        </form>
      </div>

    </section >
  );

}



