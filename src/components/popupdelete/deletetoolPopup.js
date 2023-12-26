import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTool } from "../../redux/toolsSlice";
import PropTypes from "prop-types"

const DeleteToolPopup = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleDelete = () => {
        dispatch(deleteTool(props.id))
        navigate('/tool')
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

DeleteToolPopup.propTypes = {
    trigger: PropTypes.bool.isRequired,
    setTrigger: PropTypes.any.isRequired
}
 
export default DeleteToolPopup;