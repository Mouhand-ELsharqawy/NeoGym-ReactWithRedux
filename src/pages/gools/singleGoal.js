import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import src1 from '../../assets/images/con1.PNG'
import src2 from '../../assets/images/con2.PNG'
import src3 from '../../assets/images/con3.PNG'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneGoal } from '../../redux/goolsSlice'
import DeleteGoalPopup from '../../components/popupdelete/deletegoalPopup'

const SingleGoal = () => {
    const { isLoading,goals } = useSelector(state => state.goals)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() =>{
        dispatch(getOneGoal(id))
    },[dispatch])

    const srcs = [src1,src2,src3]

    // const handleDelete = () => {
    //     dispatch(deleteGoal(id))
    //     navigate('/goals')
    // }

    const [show,setShow] = useState(false)

    return ( 

        <section className="trainer_section layout_padding">
        <div className="col-lg-4 col-md-6 mx-auto">
        <div className="box">
          <div className="name">
          
            <h2>
            { isLoading ? <div> Loading... </div> : null }
              { goals ? goals.title: null }
            </h2>
          </div>
          <div className="img-box">
            <img src= { srcs[Math.floor(Math.random() * 3)] } alt=""/>
          </div>
          <div className='name'>
              <h5>
                  { goals.body }
              </h5>
          </div>
          <div style={{ 
            display: 'flex'
           }}>
          <Link to={"/goals/update/"+goals.id}>
            
            <button type="button" className="btn btn-primary">Update <FontAwesomeIcon icon={faEdit} /></button>
          </Link>
         
            <button type="button" onClick={() => setShow(true)} className="btn btn-danger" >Delete <FontAwesomeIcon icon={faTrash} /></button>
          </div>
          <DeleteGoalPopup trigger= {show} setTrigger={setShow} id={ goals.id }>
            <p
            style={{  
              color: 'black'
             }}> Are you Sure you wanna delete?</p>
          </DeleteGoalPopup> 
         
        </div>
  </div>
  </section>
     );
}
 
export default SingleGoal;