import './login.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HandleLogin from './Auth/HandleLogin';
import Navbar from './Navbar';
import HandleLogout from './Auth/HandleLogout';

const Login = (props) => {

    const navigate = useNavigate();

    const [dailog, setDialog] = useState('');

    const [email , setEmail]=useState('')

    useEffect(() => {
        (async () => {
            if (localStorage.getItem('email') != null || localStorage.getItem('email') != '') {
                const handleLogoutRes = await HandleLogout(localStorage.getItem('email'))
            }
        })();
    }, [email])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email)
        console.log(password)
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".")

        //validation
        if (email === '' || password === '' || email === null || password === null) {
            setDialog("All details are mandatory !")
        }

        else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            setDialog("Please enter a valid e-mail address");
        }

        else {
            const userInput = {
                email: email,
                password: password,
            };

            const accessFlag = await HandleLogin(userInput, setDialog);

            if (accessFlag === true) {
                //navigate to User Home Page
                setDialog("Logged in !")

                // props.getEmail(email)
                navigate(`/`, { state: { email: email } })
            }
        }
    };
    return (
        <div>
            <Navbar />
            <div id='login' style={{backgroundColor:"rgb(162, 221, 201)" ,height:"100vh" }}>
                <div className="wrapper" >
                    <h1>Hello Again!</h1>
                    <p>Welcome back you've <br /> been missed!</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter email" name="email" id="email" autoComplete="off" />
                        <input type="password" placeholder="Password" name="password" id="password" autoComplete="off" />
                        <p className="recover">
                            <a href="#">Recover Password</a>
                        </p>
                        <button className="btn2" type="submit">Sign in</button>
                        <closeform></closeform>
                    </form>
                    <p className="or">
                        ----- or continue with -----
                    </p>
                    <div className="icons">
                        <i className="fab fa-google"></i>
                        <i className="fab fa-github"></i>
                        <i className="fab fa-facebook"></i>
                    </div>
                    <div className="not-member">
                        Not a member? <a onClick={() => navigate('/signup')} style={{ cursor: "pointer" }}>Signup</a>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <h6 style={{ color: "red" }}>{dailog}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login