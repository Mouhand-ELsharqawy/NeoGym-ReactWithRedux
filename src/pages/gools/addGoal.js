import { useDispatch } from 'react-redux';
import src from '../../assets/images/contact-img.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addGoal } from '../../redux/goolsSlice';

const AddGoal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [type,setType] = useState('')
    const [duration,setDuration] = useState('')
    const [captin,setCaptin] = useState('')
    const [start,setStart] = useState('')
    const [end,setEnd] = useState('')
    const [location,setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            type: type,
            duration: duration,
            captin: captin,
            start: start,
            end: end,
            location: location
        }

        dispatch(addGoal(data));
        navigate('/gools')
    }
    return ( 
        <section className="contact_section ">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 px-0">
                <div className="img-box">
                    <img src= { src } alt=""/>
                </div>
                </div>
                <div className="col-lg-5 col-md-6">
                <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
                    <div className="heading_container">
                    <h2>
                        Add Goal 
                    </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Captin Name"
                            value={captin}
                            onChange={(e) => setCaptin(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Start Time"
                            value={start}
                            onChange={(e) => setStart(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="End Time"
                            value={end}
                            onChange={(e) => setEnd(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div className="d-flex ">
                            <button>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
     );
}
 
export default AddGoal;