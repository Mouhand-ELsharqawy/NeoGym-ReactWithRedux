import { useDispatch } from 'react-redux';
import src from '../assets/images/contact-img.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addContact } from '../redux/contactSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    dispatch(addContact(data));

    navigate('/');

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
                  Contact Us
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
                      className="message-box" 
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} />
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
 
export default Contact;