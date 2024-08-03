
import './index.css'

export default function CreateService() {
  return (
    <section className="createService_body">
      <div className='title_container'>
        <h1>Cut & Trim</h1>
        <h3>Criar serviço</h3>
      </div>

      <div className='createService_container'>
        <form className='form_container'>
          <div className="input_container">
            <i className="fi fi-ss-barber-shop"></i>
            <input type="text" name="" id="" placeholder="Nome" />
          </div>

            <div className="input_container">
              <i className="fi fi-sr-description-alt"></i>
              <input type="text" name="" id="" placeholder="Descrição" />
            </div>

            <div className="input_container">
              <i className="fi fi-sr-usd-circle"></i>
              <input type="text" name="" id="" placeholder="Preço" />
            </div>

            <div className="input_container">
              <i className="fi fi-sr-clock-three"></i>
              <select className="select-service-time" placeholder="Tempo de duração">
              <option value="" disabled selected>Tempo de duração</option>
                <option class="option-time">30 minutos</option>
                <option class="option-time">1 hora</option>
                <option class="option-time">1 hora e 30 minutos</option>
                <option class="option-time">2 horas</option>
              </select>
            </div>
            
          <button className="btn">CRIAR</button>
        </form>

        <div className='neom'>
          <span></span>
          <span></span>
        </div>
      </div>
      <footer className='footer'>
        
      </footer>
    </section >
    
  );
}
