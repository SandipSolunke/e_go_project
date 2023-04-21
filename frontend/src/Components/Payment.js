import card_img from '../Images/card_img.png'
import Footer from './Footer'
import Navbar from './Navbar'
import './payment.css'
import { useParams } from 'react-router-dom'
import paymentApi from './Api/CartApi'

const Payment = () => {

    const { product } = useParams()
    const getEmail=localStorage.getItem('email')

    const products = [
        { id: "product_1", name: "Product 1", price: 10000 },
        { id: "product_2", name: "Product 2", price: 250000 },
        { id: "product_3", name: "Product 3", price: 90000 },
        { id: "product_4", name: "Product 4", price: 8000 },
    ];

    const handleCheckout = async (e) => {
        e.preventDefault()
        const productInfo = products.find((el) => el.id == product)

        const data = {
            amount: productInfo.price,
            name: e.target.full_name.value,
            email: e.target.email.value,
            address: {
                line_1: e.target.add_1.value,
                city: e.target.add_city.value,
                state: e.target.add_state.value,
                pin_code: e.target.add_pin_code.value,
            },
            card: {
                name: e.target.card_name.value,
                number: e.target.card_num.value,
                exp_month: e.target.card_exp_month.value,
                exp_year: e.target.card_exp_year.value,
                cvv: e.target.card_cvv.value
            }
        }

        console.log(data)

        const res = await paymentApi.post('/', data);

        console.log(res)

        if (res.data.status === true) {
            
        }
    }

    return (

        <div>
            <Navbar email={getEmail}/>
            <div class="container1" style={{backgroundColor:"rgb(162, 221, 201)" }}>

                <form action="" onSubmit={handleCheckout}>

                    <div class="row">

                        <div class="col">

                            <h3 class="title">billing address</h3>

                            <div class="inputBox">
                                <span>full name :</span>
                                <input type="text" id='full_name' name='full_name' placeholder="john deo" />
                            </div>
                            <div class="inputBox">
                                <span>email :</span>
                                <input type="email" id='email' name='email' placeholder="example@example.com" />
                            </div>
                            <div class="inputBox">
                                <span>address :</span>
                                <input type="text" id='add_1' name='add_1' placeholder="room - street - locality" />
                            </div>
                            <div class="inputBox">
                                <span>city :</span>
                                <input type="text" id='add_city' name='add_city' placeholder="mumbai" />
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>state :</span>
                                    <input type="text" id='add_state' name='add_state' placeholder="india" />
                                </div>
                                <div class="inputBox">
                                    <span>pin code :</span>
                                    <input type="text" id='add_pin_code' name='add_pin_code' placeholder="123 456" />
                                </div>
                            </div>

                        </div>

                        <div class="col">

                            <h3 class="title">payment</h3>

                            <div class="inputBox">
                                <span>cards accepted :</span>
                                <img src={card_img} alt="" />
                            </div>
                            <div class="inputBox">
                                <span>name on card :</span>
                                <input type="text" id='card_name' name='card_name' placeholder="mr. john deo" />
                            </div>
                            <div class="inputBox">
                                <span>credit card number :</span>
                                <input type="number" id='card_num' name='card_num' placeholder="1111-2222-3333-4444" />
                            </div>
                            <div class="inputBox">
                                <span>exp month :</span>
                                <input type="text" id='card_exp_month' name='card_exp_month' placeholder="january" />
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>exp year :</span>
                                    <input type="number" id='card_exp_year' name='card_exp_year' placeholder="2022" />
                                </div>
                                <div class="inputBox">
                                    <span>CVV :</span>
                                    <input type="text" id='card_cvv' name='card_cvv' placeholder="1234" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <input type="submit" value="proceed to checkout" class="submit-btn" />

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Payment