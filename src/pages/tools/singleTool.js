import { useDispatch, useSelector } from 'react-redux'
import src1 from '../../assets/images/tool1.PNG'
import src2 from '../../assets/images/tool2.PNG'
import src3 from '../../assets/images/tool3.PNG'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneTool } from '../../redux/toolsSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import DeleteToolPopup from '../../components/popupdelete/deletetoolPopup'

const SingleTool = () => {
    const { isLoading, tools } = useSelector(state => state.tools)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() =>{
        dispatch(getOneTool(id))
    },[dispatch])


    const srcs = [src1,src2,src3]

    const [show,setShow] = useState(false)
    return ( 
        <section className="trainer_section layout_padding">
        <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
            <div className="name">
                <h5>
                { isLoading ? <div> Loading... </div> : null }
                    { tools? tools.title : null }
                </h5>
            </div>
            <div className="img-box">
                <img src= { srcs[Math.floor(Math.random()*3)] } alt=""/>
            </div>
            <div style={{ 
                    display: 'flex'
                }}>
            <Link to={"/tool/update/"+tools.id}>
                <button type="button" className="btn btn-primary">Update <FontAwesomeIcon icon={faEdit} /> </button>
            </Link>
                <button type="button" onClick={() => setShow(true)} className="btn btn-danger">Delete <FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <DeleteToolPopup trigger= {show} setTrigger={setShow} id={ tools.id }>
                    <p
                    style={{  
                    color: 'black'
                    }}> Are you Sure you wanna delete?</p>
                </DeleteToolPopup> 
            </div>
        </div>
        </section>
     );
}
 
export default SingleTool;