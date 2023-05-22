import Navbar from './Navbar'
import './Contact.css'
import './style.css'
import Footer from './Footer'
import { useState,useEffect } from 'react'

const Contact = (props) => {

    const [login, setLogin] = useState(false)
    const [email, setEmail]=useState('')

    useEffect(()=>{
        const getEmail=localStorage.getItem('email')
        if(getEmail!='' && getEmail!=null && getEmail && typeof getEmail !== undefined){
            setLogin(true)
            setEmail(getEmail)
        }
    })
    return (
        <div>
            <Navbar email={email}/>
            <h1>CONTACT US</h1>
            <div  id="contact" style={{backgroundColor:"rgb(162, 221, 201)" }}>
                <div className="container" >
                    <aside>
                        <h4>Get in Touch</h4>
                        <p>We would love to here from you! Our friendly team is happy to help!</p>
                        <div className="info">
                            <article>
                                <span className="icon"><i className="uil uil-envelope"></i></span>
                                <div className="details">
                                    <h5>Chat with us</h5>
                                    <small>Send us an email and we will respond shortly.</small>
                                    <p>directorEgo@gmail.com</p>
                                </div>
                            </article>
                            <article>
                                <span className="icon"><i className="uil uil-map-marker"></i></span>
                                <div className="details">
                                    <h5>Office</h5>
                                    <small>Come Say Hello to us at our HQ</small>
                                    <p>SGGS College</p>
                                    <p> Maharashtra India</p>
                                </div>
                            </article>
                            <article>
                                <span className="icon"><i className="uil uil-phone"></i></span>
                                <div className="details">
                                    <h5>Phone</h5>
                                    <small>Mon-Sat from 10am - 8pm.</small>
                                    <p>+919552576768</p>
                                </div>
                            </article>
                        </div>
                    </aside>
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email Id" placeholder="xyz@email.com" required />
                        <input type="number" name="Phone No." placeholder="Phone No" required />
                        <textarea name="Message" placeholder="Message" required></textarea>
                        <button type="submit" className="btn btn1">submit</button>
                    </form>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Contact