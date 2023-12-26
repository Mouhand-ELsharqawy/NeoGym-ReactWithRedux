import { useDispatch } from 'react-redux';
import src from '../../assets/images/contact-img.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addService } from '../../redux/serviceSlice';

const AddService = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [type,setType] = useState('')
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')
    const [start,setStart] = useState('')
    const [end,setEnd] = useState('')
    const [active,setActive] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name:name,
            type: type,
            desc: desc,
            start: start,
            end: end,
            active: active
        }

        dispatch(addService(data))
        navigate('/service')
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
                        Add Service
                    </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Service Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Service Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)} />
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
                            placeholder="Active"
                            value={active}
                            onChange={(e) => setActive(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            className="message-box" 
                            placeholder="Message"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} />
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
 
export default AddService;