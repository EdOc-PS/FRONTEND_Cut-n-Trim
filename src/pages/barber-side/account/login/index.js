

import { Link } from 'react-router-dom';
import styles from'./login.module.css'


export default function Login() {
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

        <form className={styles.form_container}>
          <div className={styles.input_body}>
            <label>Email:</label>
            <div className={styles.input_container}>
              <i className="fi fi-sr-envelope"></i>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div className={styles.input_body}>
            <label>Password:</label>
            <div className={styles.input_container}>
              <i className="fi fi-sr-shield"></i>
              <input type="password" />
              <i className="fi fi-sr-eye"></i>
            </div>
          </div>
        </form>

        <footer className={styles.footer}>
          <Link to={'/barber/account/barber-shop'}><button className='btn_continue'>Continue</button></Link>
          <p>Already have a account? LINK</p>
        </footer>
      </div>
    </section >
  );

}
