import './index.css'
function Information() {
  return (
    <section className='test'>

      <div className='user_container'>
        <p>Hello, <strong>Eduardo Octávio</strong></p>
        <p></p>
      </div>


      <div className='barber_container'>
        <div className='label'>
          <p>Your barber: </p>
        </div>

        <div className='barber_content'>
          <img src='https://i.pinimg.com/564x/1d/c4/cb/1dc4cbdc7e39a3001820541c853da6b8.jpg' ></img>
          <div className='barber_text_container'>
            <p>Carlos Ricardo Azevedo</p>
            <i class="fi fi-sr-star"></i>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Information;
