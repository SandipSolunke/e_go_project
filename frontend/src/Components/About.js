import about_img_1 from '../Images/about1.png'
import about_img_2 from '../Images/about2.png'
import about_img_3 from '../Images/about3.png'
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
                        <h2 className="about_article-title">Ajhfdliba kajdso</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio beatae minima ullam a quaerat officiis molestias temporibus architecto, officia incidunt culpa nostrum soluta.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>

                </article>

                <article className="about_article">
                    <div className="about_content">
                        <h2 className="about_article-title">Ajhfdliba kajdso</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio beatae minima ullam a quaerat officiis molestias temporibus architecto, officia incidunt culpa nostrum soluta.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
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
                        <h2 className="about_article-title">Ajhfdliba kajdso</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio beatae minima ullam a quaerat officiis molestias temporibus architecto, officia incidunt culpa nostrum soluta.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </article>
            </div>
            <Footer/>
        </div>
    )
}


export default About