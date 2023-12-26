import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTrainer } from "../../redux/trainersSlice";
import PropTypes from "prop-types"

const DeleteTrainerPopup = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        dispatch(deleteTrainer(props.id))
        navigate('/trainee')
    }
    return (props.trigger)?( 
        <>
        {props.trigger && <div className="shadow-overlay"></div>}
        <div className="popup">
            <div className="popup-inner">
            
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                { props.children }
                <button type="button" className="btn btn-danger" onClick={handleDelete}> Delete </button>
                <button type="button" className="btn btn-primary" onClick={() => props.setTrigger(false)}> Cancel </button>
            </div>
        </div>
        </>
     ) : "";
}

DeleteTrainerPopup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.any.isRequired
}
 
export default DeleteTrainerPopup;