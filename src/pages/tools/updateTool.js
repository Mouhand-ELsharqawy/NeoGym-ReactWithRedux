import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import src from '../../assets/images/contact-img.jpg'
import { updateTool } from "../../redux/toolsSlice"

const UpdateTool = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();

    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [useage,setUseage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: name,
            type: type,
            useage: useage
        }

        dispatch(updateTool(id,data))
        navigate('/tool')
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
                        Update Tool
                    </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
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
                            placeholder="Useage"
                            value={useage}
                            onChange={(e) => setUseage(e.target.value)} />
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
 
export default UpdateTool;