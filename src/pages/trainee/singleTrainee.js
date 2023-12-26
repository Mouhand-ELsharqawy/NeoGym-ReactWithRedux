import src1 from '../../assets/images/t1.jpg'
import src2 from '../../assets/images/t2.jpg'
import src3 from '../../assets/images/t3.jpg'
import facebook from '../../assets/images/facebook-logo.png'
import twitter from '../../assets/images/twitter.png'
import insta from '../../assets/images/instagram-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOneTrainee } from '../../redux/traineeSlice'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import DeleteTraineePopup from '../../components/popupdelete/deletetraineePopup'


const SingleTrainee = () => {
    const srcs = [src1,src2,src3]

    const dispatch = useDispatch()
    
    const { isLoading,trainee } = useSelector(state => state.trainee)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getOneTrainee(id))
    },[dispatch])

    const [show,setShow] = useState(false)

    return ( 
        <section className="trainer_section layout_padding">
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="box">
            <div className="name">
                <h5>
                { isLoading ? <div> Loading... </div> : null }
                { trainee ? trainee.title: null }
                </h5>
            </div>
            <div className="img-box">
                <img src= { srcs[Math.floor(Math.random()*3)] } alt=""/>
            </div>
            <div className="social_box">
                
                <img src={ facebook } alt=""/>
                
                <img src={ twitter } alt=""/>
                
                <img src={ insta } alt=""/>
                <div style={{ 
                    display: 'flex'
                }}>
                <Link to={"/trainee/update/"+trainee.id}>
                    <button type="button" className="btn btn-primary">Update <FontAwesomeIcon icon={faEdit}/></button>
                </Link>
                    <button type="button" onClick={() => setShow(true)} className="btn btn-danger">Delete <FontAwesomeIcon icon={faTrash}/></button>
             </div>
             <DeleteTraineePopup trigger= {show} setTrigger={setShow} id={ trainee.id }>
                <p
                style={{  
                color: 'black'
                }}> Are you Sure you wanna delete?</p>
            </DeleteTraineePopup> 
            </div>
            </div>
        </div>
        </section>
     );
}
 
export default SingleTrainee;