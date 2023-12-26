import { useEffect, useState } from 'react';
import src1 from '../../assets/images/u-1.png'
import src2 from '../../assets/images/u-2.png'
import src3 from '../../assets/images/u-3.png'
import src4 from '../../assets/images/u-4.png'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneService } from '../../redux/serviceSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import DeleteServicePopup from '../../components/popupdelete/deleteservicePopup';

const SingleService = () => {
    const { isLoading, services } = useSelector(state => state.services)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(()=>{
        dispatch(getOneService(id))
    },[dispatch])

    const srcs = [src1,src2,src3,src4]

    const [show,setShow] = useState(false)
    return ( 
        <section className="us_section layout_padding">
        <div className="col-lg-3 col-md-6">
          <div className="box">
            <div className="img-box">
              <img src={ srcs[Math.floor(Math.random()*4)] } alt=""/>
            </div>
            <div className="detail-box">
              <h5>
              { isLoading ? <div> Loading... </div> : null }
                { services? services.title: null }
              </h5>
              <p>
                { services.body }
              </p>
              <div style={{ 
                display: 'flex'
              }}>
              <Link to={"/service/update/"+services.id}>
                  <button type="button" className="btn btn-primary">Update <FontAwesomeIcon icon={faEdit}/> </button>
              </Link>
              <button type="button" onClick={() => setShow(true)} className="btn btn-danger">Delete <FontAwesomeIcon icon={faTrash} /> </button>
          </div>

          <DeleteServicePopup trigger= {show} setTrigger={setShow} id={ services.id }>
            <p
            style={{  
              color: 'black'
             }}> Are you Sure you wanna delete?</p>
          </DeleteServicePopup> 

            </div>
          </div>
        </div>
        </section>
     );
}
 
export default SingleService;