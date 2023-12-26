import { Link } from 'react-router-dom'
import src1 from '../assets/images/tool1.PNG'
import src2 from '../assets/images/tool2.PNG'
import src3 from '../assets/images/tool3.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types"


const ToolList = ({ tool, number }) => {

    const srcs = [src1,src2,src3]
    return ( 
        <div className="col-lg-4 col-md-6 mx-auto" >
            <div className="box">
            <div className="name">
                <h5>
                    { tool.title }
                </h5>
            </div>
            <div className="img-box">
                <img src= { srcs[number] } alt="" loading='lazy'/>
            </div>
            <Link to={"/tool/read/"+tool.id}>
                    <button type="button" className="btn btn-primary">READ <FontAwesomeIcon icon={faBook}/> </button>
            </Link>
            </div>
        </div>
     );
}

ToolList.propTypes = {
    tool: PropTypes.any.isRequired,
    number: PropTypes.number.isRequired
  }
 
export default ToolList;