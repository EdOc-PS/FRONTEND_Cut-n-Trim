

import './index.css'

export default function SingUp() {
  return (

    <section className="singup_body">

      <div className='title_container'>
        <h1>Cut & Trim</h1>
        <h3>Create a account</h3>
      </div>

      <div className='singup_container'>
        <form className='form_container'>
          <div class="input_container">
            <i class="fi fi-sr-user-astronaut"></i>
            <input type="text" name="" id="" placeholder="name" />
          </div>

          <div className='same-place'>
            <div class="input_container">
              <i class="fi fi-sr-barber-pole"></i>
              <input type="text" name="" id="" placeholder="barber-shop" />
            </div>

            <div class="input_container">
              <i class="fi fi-sr-mobile-button"></i>
              <input type="text" name="" id="" placeholder="phone" />
            </div>
          </div>

          <button>Sing Up</button>
        </form>


        <div className='neom'>
          <span></span>
          <span></span>
        </div>

      </div>

      <footer className='footer'>
        <p>Already have a account?</p>
      </footer>
    </section >

  );
}

