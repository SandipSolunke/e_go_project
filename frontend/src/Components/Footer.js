import './style.css'

import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate=useNavigate()
    return (
        <div>
            <footer>

                <div className="container footer_container">
                    <div className="footer1">

                        <a onClick={()=>navigate('/')} style={{cursor:"pointer"}} className="footer_logo"><h3>E-GO</h3></a>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corpasfs</p>
                        <div className="footer_subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"><i className="uil uil-arrow-right"></i></button>
                        </div>


                    </div>
                    <div className="footer2">
                        <p>Perma Links</p>
                        <ul className="permalinks">
                            <li><a onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Home</a></li>
                            <li><a onClick={()=>navigate('/about')} style={{cursor:"pointer"}}>About</a></li>
                            <li><a onClick={()=>navigate('/testimonials')} style={{cursor:"pointer"}}>Testimonials</a></li>
                            <li><a onClick={()=>navigate('/faqs')} style={{cursor:"pointer"}}>Faqs</a></li>
                            <li><a onClick={()=>navigate('/contact')} style={{cursor:"pointer"}}>Contact</a></li>

                        </ul>
                    </div>
                    <div className="footer3">
                        <h4>Privacy</h4>
                        <ul className="privacy">
                            <li><a onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Privacy Policy</a></li>
                            <li><a onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Terms and Conditions</a></li>
                            <li><a onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Refund POlicy</a></li>
                        </ul>
                    </div>
                    <div className="footer4">
                        <h4>Contact US</h4>
                        <p>
                            +91 8787457454 <br />
                            xyzacb@gmailo.com
                        </p>
                        <ul className="footer_socials">
                            <li><a href="" target="_blank"><i className="uil uil-facebook"></i></a></li>
                            <li><a href="" target="_blank"><i className="uil uil-instagram"></i></a></li>
                            <li><a href="" target="_blank"><i className="uil uil-linkedin"></i></a></li>
                            <li><a href="" target="_blank"><i className="uil uil-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <small> &copy;Powered By E-Go</small>
                </div>
            </footer>

        </div>
    )
}

export default Footer