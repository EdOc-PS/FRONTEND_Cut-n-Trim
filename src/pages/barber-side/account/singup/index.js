

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
          <label>Name:</label>
          <div class="input_container">
          <i class="fi fi-sr-employee-man-alt"></i>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div class="input_body">
          <label>Email:</label>
          <div class="input_container">
          <i class="fi fi-sr-envelope"></i>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div class="input_body">
          <label>Password:</label>
          <div class="input_container">
            <i class="fi fi-sr-shield"></i>
            <input type="text" name="" id="" />
          </div>
        </div>


      </form>

      

      <footer className='footer'>
        <button>Continue</button>
        <p>Already have a account? LINK</p>
      </footer>
    </section >
  );

}

