import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState,useEffect } from "react"


const Faq = (props) => {
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
            <div style={{backgroundColor:"rgb(162, 221, 201)" }}>
                <h1>FAQS</h1>
                <div class="container faqs_container">
                    <aricle class="faq ">
                        <span class="faq_icon"><i class="uil uil-plus"></i></span>
                        <div class="faq_question-answer">
                            <h4 class="faq_question">How does this work?</h4>
                            <p class="faq_answer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit odit quod veritatis aut temporibus cupiditate eaque ad?</p>
                        </div>
                    </aricle>
                    <aricle class="faq">
                        <span class="faq_icon"><i class="uil uil-plus"></i></span>
                        <div class="faq_question-answer">
                            <h4 class="faq_question">any chargers to register in website?</h4>
                            <p class="faq_answer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit odit quod veritatis aut temporibus cupiditate eaque ad?</p>
                        </div>

                    </aricle>
                    <aricle class="faq">
                        <span class="faq_icon"><i class="uil uil-plus"></i></span>
                        <div class="faq_question-answer">
                            <h4 class="faq_question">How to register in this website ?</h4>
                            <p class="faq_answer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit odit quod veritatis aut temporibus cupiditate eaque ad?</p>
                        </div>
                </aricle>
                <aricle class="faq">
                    <span class="faq_icon"><i class="uil uil-plus"></i></span>
                    <div class="faq_question-answer">
                        <h4 class="faq_question">How to do payment?</h4>
                        <p class="faq_answer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit odit quod veritatis aut temporibus cupiditate eaque ad?</p>
                    </div>

                </aricle>
                <aricle class="faq">
                    <span class="faq_icon"><i class="uil uil-plus"></i></span>
                    <div class="faq_question-answer">
                        <h4 class="faq_question">Any age restrictions?</h4>
                        <p class="faq_answer">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore fugit odit quod veritatis aut temporibus cupiditate eaque ad?</p>
                    </div>

                </aricle>
                
               
               
            </div>
        </div >
        <Footer/>
        </div >
    )
}

export default Faq