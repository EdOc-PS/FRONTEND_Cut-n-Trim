
import { Link } from 'react-router-dom';
import styles from './account.module.css'


export default function Account() {
  return (


    <section className={styles.account_body}>

      <img src='/assets/images/barbershop.svg' />

      <div className={styles.account_container}>

        <div className={styles.text_container}>
          <h1>CUT&TRIM</h1>
          <h2>Teste</h2>
          <p>das</p>
        </div>

        <div className={styles.buttons_container}>
          <Link to={'/barber/singup'}><button className={styles.btn_account}>Create account</button></Link>
          <Link to={'/barber/login'}><button className={styles.btn_login_account}>Login</button></Link>
        </div>
      </div>


    </section >
  );

}
