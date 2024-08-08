import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from'./login.module.css'
import { Post } from '../../../../core/service/post';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginBarber = {
    email: email,
    password: password,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    Post('http://localhost:8080/cutandtrim/signup', loginBarber)
      .then(jBody => {
        console.log(jBody)
        if(jBody.barberShopID) {    
          localStorage.setItem("barberShopID", jBody.barberShopID);
          window.location.href = 'http://localhost:3000/barber/service/list';
        }
      }).catch(error => {
        console.error('Erro:', error);
      });
  }
  return (


    <section className={styles.login_body}>
      <div className={styles.header_container}>
        <div className={styles.back_container}>
          <Link to={'/barber/account/barber-shop'}>
            <button className={styles.btn_back}><i className="fi fi-sr-caret-left"></i></button>
          </Link>
        </div>
        <div className={styles.title_container}>
          <h1>Login</h1>
          <p>Enter your personal information</p>
        </div>
      </div>

      <div className={styles.login_container}>

        <form className={styles.form_container} onClick={handleSubmit}>
          <div className={styles.input_body}>
            <label>Email:</label>
            <div className={styles.input_container}>
              <i className="fi fi-sr-envelope"></i>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
          <footer className={styles.footer}>
          <button className={styles.btn_continue}>Continue</button>
          </footer>
        </form>
      </div>
    </section >
  );

}