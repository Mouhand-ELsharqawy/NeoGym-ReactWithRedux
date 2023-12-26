import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import src from '../../assets/images/contact-img.jpg'
import { updateTrainee } from "../../redux/traineeSlice"

const UpdateTrainee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [request,setRequest] = useState('')
    const [age,setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            request: request,
            age: age
        }

        dispatch(updateTrainee(id,data))
        navigate('/trainee')
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
                        Update Trainee
                    </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                            type="text" 
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div>
                            <input 
                            type="text" 
                            placeholder="Your Target"
                            value={request}
                            onChange={(e) => setRequest(e.target.value)} />
                        </div>

                        <div>
                            <input 
                            type="text"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)} />
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
 
export default UpdateTrainee;