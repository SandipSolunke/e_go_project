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
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quos labore quod in voluptate suscipit!</p>
                <div class="container testimonial_container">
                    <article class="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio rem eaque eos quo! Dicta voluptates animi, laudantium voluptatem harum nulla et?
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_1} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Xyz Abc</b></p>
                                <small>Musician</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio rem eaque eos quo! Dicta voluptates animi, laudantium voluptatem harum nulla et?
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_2} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Xyz Abc</b></p>
                                <small>Musician</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio rem eaque eos quo! Dicta voluptates animi, laudantium voluptatem harum nulla et?
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_3} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Xyz Abc</b></p>
                                <small>Musician</small>
                            </div>
                        </div>
                    </article>
                    <article class="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio rem eaque eos quo! Dicta voluptates animi, laudantium voluptatem harum nulla et?
                        </p>
                        <div class="testimonial_client">
                            <div class="avatar">
                                <img src={avtar_img_4} alt="" />
                            </div>
                            <div class="testimonial_work">
                                <p><b>Xyz Abc</b></p>
                                <small>Musician</small>
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