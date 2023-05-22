import about_img_1 from '../Images/about1.png'
import about_img_2 from '../Images/trasn.png'
import about_img_3 from '../Images/tango.png'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import { useState,useEffect } from 'react'



const About = () => {

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
        <div style={{marginTop:"100px", backgroundColor:"rgb(162, 221, 201)" }}>
            <Navbar email={email}/>
            <h1 className="about_title">About Us</h1>
            <div className="container">
                <article className="about_article">
                    <div className="about_image">
                        <img src={about_img_1} alt="" />
                    </div>
                    <div className="about_content">
                        {/* <h2 className="about_article-title">Ajhfdliba kajdso</h2> */}
                        <p>At E-GO, We work towards a sustainable and connected future.
                         A share, for everyone. We are creating a Mobility as a service (MaaS) 
                         platform to radically change the way people and goods are moved from 
                         point A to B. We are here to provide the next-gen urban commute system 
                         for ever-expanding metropolitans. Our shared electric vehicles will 
                         become an integral part of your world. Our vision is system-level
                         integration of sustainable mobility into the transportation system. </p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>

                </article>

                <article className="about_article">
                    <div className="about_content">
                        <h2 className="about_article-title">MASTI</h2>
                        <p>FEATURES : Sport look ,Fat Tyre bike 3 inch tyre , Detachable battery pack, 36V 10Ah battery capacity , 17” Mild Steel Frame , 26” Aluminum Alloy Rim ,Paddle assistant sensor system , Digital display , 5 gear motor system, 36V 250W Hub motor, Front and Rear Disc brakes,Seat adjustment – up down, Unisex cycle frame, Ignition key to start and stop the system,Cruise control,Kilometer per charge – 35-40 KMs,Load Capacity – 100 KG

                        </p>
                        <a href="#" className="btn btn-primary ">Learn More</a>
                    </div>
                    <div className="about_image">
                        <img src={about_img_2} alt="" />
                    </div>
                </article>

                <article className="about_article">
                    <div className="about_image">
                        <img src={about_img_3} alt="" />
                    </div>
                    <div className="about_content">
                        <h2 className="about_article-title">TANGO</h2>
                        <p>FEATURE :Sport look , Regular Tyre bike 2 inch tyre , Detachable battery pack , 36V 10Ah battery capacity , 17” Mild Steel Frame , 26” Aluminum Alloy Rim ,Paddle assistant sensor system – No , Digital display , 5 gear motor system , 36V 250W Hub motor , Front and Rear Disc brakes , Seat adjustment – up down , Unisex cycle frame , Ignition key to start and stop the system, Cruise control, Kilometer per charge – 35-40 KMs

                        </p>
                        <a href="#" className="btn btn-primary ">Learn More</a>
                    </div>
                </article>
            </div>
            <Footer/>
        </div>
    )
}


export default About