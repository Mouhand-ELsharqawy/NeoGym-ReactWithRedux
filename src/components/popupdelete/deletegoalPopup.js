import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { deleteGoal } from "../../redux/goolsSlice";
import { useNavigate } from "react-router-dom";

const DeleteGoalPopup = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        dispatch(deleteGoal(props.id))
        navigate('/goals')
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

DeleteGoalPopup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.any.isRequired
}
 
export default DeleteGoalPopup;