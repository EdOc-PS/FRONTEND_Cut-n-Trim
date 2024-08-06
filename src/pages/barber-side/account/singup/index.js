

import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './singup.module.css'


export default function SingUp() {

  const [name, setName] = useState('');
  const [email, setEmai] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      sessionStorage.setItem("barberName", name);
      sessionStorage.setItem("barberEmail", email);
      sessionStorage.setItem("barberPassword", password);
      window.location.href = "http://localhost:3000/barber/barber-shop";
    } else {
      console.log('Senhas inválidas!');
    }
  }


  return (
    <section className={styles.singup_body}>
      <div className={styles.header_container}>
        <div className={styles.back_container}>
          <Link to={'/barber/account/barber-shop'}>
            <button className={styles.btn_back}><i className="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className={styles.title_container}>
          <h1>Register</h1>
          <p>Enter your personal information</p>
        </div>
      </div>

      <div className={styles.singup_container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <div className={styles.input_field}>
            <div className={styles.input_body}>
              <label>Name:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-employee-man-alt"></i>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>

            <div className={styles.input_body}>
              <label>Email:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-envelope"></i>
                <input type="email" value={email} onChange={(e) => setEmai(e.target.value)} />
              </div>
            </div>

            <div className={styles.input_body}>
              <label>Password:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-shield"></i>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <i className="fi fi-sr-eye"></i>
              </div>
            </div>

            <div className={styles.input_body}>
              <label>Repeat password:</label>
              <div className={styles.input_container}>
                <i className="fi fi-sr-shield"></i>
                <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                <i className="fi fi-sr-eye"></i>
              </div>
            </div>
          </div>

          <footer className={styles.footer}>
            <button className={styles.btn_continue}>Continue</button>
            <p>Already have a account? LINK</p>
          </footer>
        </form>
      </div>

    </section >
  );

}

