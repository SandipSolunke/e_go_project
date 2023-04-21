import Navbar from "./Navbar"
import Header from "./Header"
import './style.css'
import './Contact.css'
import client_img_1 from '../Images/client1.png'
import client_img_2 from '../Images/client2.png'
import client_img_3 from '../Images/client3.png'
import client_img_4 from '../Images/client4.png'
import client_img_5 from '../Images/client5.png'
import client_img_6 from '../Images/client6.png'
import client_img_7 from '../Images/client7.png'
import client_img_8 from '../Images/client8.png'
import Footer from "./Footer"
import { useEffect, useState } from "react";

const Home = () => {

    const [email,setEmail]=useState('')


    useEffect(() => {
        const getEmail=localStorage.getItem('email');

        (async () => {
            if (getEmail != null || getEmail != '') {
                setEmail(getEmail)
            }
        })();
    },[])

    return (
        <div>
            <Navbar email={email}/>
            <Header />
            <div id="clients" style={{ marginBottom: "100px",backgroundColor:"rgb(162, 221, 201)" }}>
                <h1>Our Clients</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus doloribus nihil, fuga quisquam repudiandae eveniet error voluptatem odio.</p>.container
                <div className="clients_container">
                    <div><img src={client_img_1} alt="" /></div>
                    <div><img src={client_img_2} alt="" /></div>
                    <div><img src={client_img_3} alt="" /></div>
                    <div><img src={client_img_4} alt="" /></div>
                    <div><img src={client_img_5} alt="" /></div>
                    <div><img src={client_img_6} alt="" /></div>
                    <div><img src={client_img_7} alt="" /></div>
                    <div><img src={client_img_8} alt="" /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home