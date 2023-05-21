import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import HandleLogout from "./Auth/HandleLogout"

const Navbar = (props) => {

    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        const getEmail = props.email

        if (getEmail != '' && getEmail != null && getEmail && typeof getEmail !== undefined) {
            setLogin(true)
            setEmail(getEmail)
        }
    })



    return (
        <div style={{ marginBottom: "100px",backgroundColor:"black" }}>
            <nav>
                <div className="container nav_container">
                    <ul className="nav_items">
                        <li><a onClick={() => navigate('/')} style={{ cursor: "pointer" }}>Home</a></li>
                        <li><a onClick={() => navigate('/about')} style={{ cursor: "pointer" }}>About</a></li>
                        <li><a onClick={() => navigate('/testimonials')} style={{ cursor: "pointer" }}>Testimonials</a></li>
                        <li><a onClick={() => navigate('/faqs')} style={{ cursor: "pointer" }}>Faqs</a></li>
                        <li><a onClick={() => navigate('/contact')} style={{ cursor: "pointer" }}>Contact</a></li>
                        <li><a onClick={() => navigate('/locate_bike')} style={{ cursor: "pointer" }}>Locate Bike</a></li>
                        {
                            // console.log(" flag :",login)
                            login === false ? <></> : 
                            <>
                            <li><a onClick={() => navigate('/products')} style={{ cursor: "pointer" }}>Products</a></li>
                            <li><a onClick={() => navigate('/unlock_bike')} style={{ cursor: "pointer" }}>Unlock Bike</a></li>
                            </>
                        }
                    </ul>
                    <a onClick={() => navigate('/')} style={{ cursor: "pointer" }}><h3>E-GO</h3></a>
                    <div className="nav_signin-signup">
                        {
                            login === false ?
                                <>
                                    <a onClick={() => navigate('/login')} style={{ cursor: "pointer" }} >Login</a>
                                </>
                                :
                                <>
                                    <a onClick={() =>{ HandleLogout(); alert("Logged Out!"); navigate('/'); window.location.reload();  }} style={{ cursor: "pointer" }} >Logout</a>
                                    <a className="btn" onClick={() => navigate('/contact')} style={{ cursor: "pointer" }}>Me</a>
                                </>
                        }
                    </div>
                    <button className="menu-btn"><i className="uil uil-bars"></i></button>
                    <button className="close-btn"><i className="uil uil-multiply"></i></button>
                </div>
            </nav>
        </div >
    )
}

export default Navbar