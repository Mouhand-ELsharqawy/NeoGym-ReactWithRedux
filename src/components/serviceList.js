import { Link } from 'react-router-dom'
import src1 from '../assets/images/u-1.png'
import src2 from '../assets/images/u-2.png'
import src3 from '../assets/images/u-3.png'
import src4 from '../assets/images/u-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"

const ServiceList = ({ service, number }) => {
    const srcs = [src1,src2,src3,src4] 
    return ( 
        <div className="col-lg-3 col-md-6">
          <div className="box">
            <div className="img-box">
              <img src={ srcs[number] } alt="" loading='lazy'/>
            </div>
            <div className="detail-box">
              <h5>
                { service.title }
              </h5>
              <p>
                { service.body }
              </p>
              <Link to={"/service/read/"+service.id}>
                    <button type="button" class="btn btn-primary">READ <FontAwesomeIcon icon={faBook}/> </button>
              </Link>
            </div>
          </div>
        </div>
     );
}

ServiceList.propTypes = {
  service: PropTypes.any.isRequired,
  number: PropTypes.number.isRequired
}
 
export default ServiceList;