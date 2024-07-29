import { Link } from 'react-router-dom';
import './index.css'

export default function CardService() {

  return (
    <Link to={'/client/timetable'}>
      <div className='card-body'>
        <img src='https://blog.oceane.com.br/wp-content/uploads/2024/03/destaque-corte-americano.jpg'/>

        <div className='text_container'>
          <h3>Barbe</h3>
          <p>$25.00</p>
        </div>
      </div>
    </Link>
  );
}

