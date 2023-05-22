import avtar_img_1 from '../Images/avatar1.jpg'
import avtar_img_2 from '../Images/avatar2.jpg'
import avtar_img_3 from '../Images/avatar3.jpg'
import avtar_img_4 from '../Images/avatar4.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Testimonials = (props) => {

    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        const getEmail = localStorage.getItem('email')
        if (getEmail != '' && getEmail != null && getEmail && typeof getEmail !== undefined) {
            setLogin(true)
            setEmail(getEmail)
        }
    })

    return (

        <div>
            <Navbar email={email} />
            <div style={{ backgroundColor: "rgb(162, 221, 201)" }}>
                <h1>Testimonials</h1>
                <p class="lead">Feedbacks from verified users!</p>
                <div class="container testimonial_container">
                    <article class="testimonial">
                        <p>"I've been using E-GO MaaS platform for my daily commute, and I'm impressed with their service. The shared electric vehicles are convenient and eco-friendly. The Wwebsite is user-friendly, making it easy to book and track the vehicles. I highly recommend E-GO for anyone looking for a sustainable and efficient way to get around."
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_1} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Nancy</b></p>
                                <small>Employee</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p>"E-GO is a game-changer for urban mobility. Their MaaS platform offers a range of shared electric vehicles, making it easy to choose the most suitable option for my needs. The affordability and eco-friendly aspect of their service are commendable. I'm excited to see their positive impact on reducing traffic congestion and air pollution in cities."
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_2} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>JOHN</b></p>
                                <small>Guest</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p> The vehicles were well-maintained, and the overall service was excellent.
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_3} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Michael</b></p>
                                <small>Musician</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p>Their MaaS platform offers a seamless experience, and their shared electric vehicles are comfortable and reliable.
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_4} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Mary</b></p>
                                <small>Student</small>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Testimonials