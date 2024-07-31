

import './index.css'


export default function SingUp() {
  return (

    <section className="singup_body">


      <img src="/assets/images/welcome.svg" alt='' />


      <div className='title_container'>
        <h1>Register</h1>
        <p>Enter your personal information</p>
      </div>

      <form className='form_container'>
        <div class="input_body">
          <label>Your name:</label>
          <div class="input_container">
            <i class="fi fi-sr-user-astronaut"></i>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div class="input_body">
          <label>Teste</label>
          <div class="input_container">
            <i class="fi fi-sr-key"></i>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div class="input_body">
          <label>Teste</label>
          <div class="input_container">
            <i class="fi fi-sr-mobile-button"></i>
            <input type="text" name="" id="" />
          </div>
        </div>


      </form>

      

      <footer className='footer'>
        <button>Register</button>
        <p>Already have a account? LINK</p>
      </footer>
    </section >
  );

}

