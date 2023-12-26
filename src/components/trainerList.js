import src1 from '../assets/images/t1.jpg'
import src2 from '../assets/images/t2.jpg'
import src3 from '../assets/images/t3.jpg'
import facebook from '../assets/images/facebook-logo.png'
import twitter from '../assets/images/twitter.png'
import insta from '../assets/images/instagram-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"

const TrainerList = ({ trainer,number }) => {
    const srcs = [src1,src2,src3]
    return ( 
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
                <h5>
                { trainer.title }
                </h5>
            </div>
            <div className="img-box">
                <img src= { srcs[number] } alt="" loading='lazy'/>
            </div>
            <div className="social_box">
                
                <img src={ facebook } alt=""/>
                
                <img src={ twitter } alt=""/>
                
                <img src={ insta } alt=""/>
                <Link to={"/trainer/read/"+trainer.id}>
                    <button type="button" className="btn btn-primary">READ <FontAwesomeIcon icon={faBook}/> </button>
                </Link>
            </div>
            </div>
        </div>
     );
}


TrainerList.propTypes = {
    trainer: PropTypes.any.isRequired,
    number: PropTypes.number.isRequired
  }
 
export default TrainerList;