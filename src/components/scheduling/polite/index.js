import CardService from '../../general/card-services/customer';
import './index.css'

function Polite() {
  return (
    <section className='polite_container'>

      <div className='text_container'>
        <h2>Serviços:</h2>
        <p>Escolha um dos serviços abaixo</p>
      </div>

      <div className='service_container'>
        <CardService service={{ name: "Cabelo", price: 20 }}></CardService>
      </div>

    </section>
  );
}

export default Polite;
