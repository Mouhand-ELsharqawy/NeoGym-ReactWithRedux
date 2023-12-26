import { Link } from 'react-router-dom'
import src1 from '../assets/images/con1.PNG'
import src2 from '../assets/images/con2.PNG'
import src3 from '../assets/images/con3.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"

const GoalList = ({ goal, number }) => {

    const srcs = [src1,src2,src3]
    return ( 
        <div className="col-lg-4 col-md-6 mx-auto">
              <div className="box">
                <div className="name">
                  <h2>
                    { goal.title }
                  </h2>
                </div>
                <div className="img-box">
                  <img src= { srcs[number] } alt="" loading='lazy'/>
                </div>
                <div className='name'>
                    <h5>
                        { goal.body }
                    </h5>
                </div>

              <Link to={"/goals/read/"+goal.id}>
                    <button type="button" className="btn btn-primary">READ <FontAwesomeIcon icon={faBook}/> </button>
              </Link>
              </div>
        </div>
     );
}

GoalList.propTypes = {
  goal: PropTypes.any.isRequired,
  number: PropTypes.number.isRequired
}
 
export default GoalList;