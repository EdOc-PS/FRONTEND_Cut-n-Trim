
import Days from '../../components/timetable/days';
import Months from '../../components/timetable/months';
import './index.css'

function Timetable() {
    return (
      <section className="timetable">
        <Months></Months>
        <Days></Days>
      </section>
    );
  }
  
  export default Timetable;
  