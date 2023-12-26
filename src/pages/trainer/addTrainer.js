import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import src from '../../assets/images/contact-img.jpg'
import { addTrainer } from "../../redux/trainersSlice";

const AddTrainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [firstname,setFirstname] = useState('')
    const [lastName,setLastname] = useState('')
    const [phone,setPhone] = useState('')
    const [age,setAge] = useState('')
    const [worktime,setWorkTime] = useState('')
    const [email,setEmail] = useState('')
    const [profname,setProfName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstname: firstname,
            lastName: lastName,
            phone: phone,
            age: age,
            worktime: worktime,
            email: email,
            profname: profname
        }

        dispatch(addTrainer(data))
        navigate('/trainer')
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
                            Add Trainer
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                            <div>
                                <input 
                                type="text" 
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastname(e.target.value)} />
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
                                placeholder="Trainer Age"
                                value={phone}
                                onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                placeholder="Work Time"
                                value={worktime}
                                onChange={(e) => setWorkTime(e.target.value)} />
                            </div>
                            <div>
                                <input 
                                type="text" 
                                placeholder="Job Title"
                                value={worktime}
                                onChange={(e) => setProfName(e.target.value)} />
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
 
export default AddTrainer;