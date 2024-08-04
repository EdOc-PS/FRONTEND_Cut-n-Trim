import CardService from '../../../../components/general/card-services/barber/index.js';
import './listServices.css';
import { useState, useEffect } from 'react';
import { Get } from '../../../../core/service/get.js';

export default function ListServices(){
  const [services, setServices] = useState([]);

    useEffect(() => {
      const getServices = async () => {
        Get('http://localhost:8080/cutandtrim/barbershop/a7ba22ee-6d40-4b0b-ac16-9496afcab296')
        .then(jBody => { 
          if(jBody.services !== null)
            setServices(jBody.services);
          else
            setServices([]);
        })
        .catch(error => {console.error('Error:', error);});
      }

      getServices();
    }, []);
    console.log(services)
    return (
    <section className="listServices_body">
        <div className='header_container'>
          <div className='title_container'>
            <h1>List Services</h1>
            <p>All Service's from your barber shop</p>
          </div>
        </div>

      <div className='listServices_container'>
          {
          services.map(service => 
            <CardService service={{ id: service.id, name: service.name, price: service.price }}></CardService>
          )}

      </div>

      </section>
    );
}