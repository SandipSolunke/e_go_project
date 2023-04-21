import './login.css'
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import HandleSignup from './Auth/HandleSignup';
import Navbar from './Navbar';
import HandleLogout from './Auth/HandleLogout';

const Signup = (props) => {

    const navigate = useNavigate();

    const [dailog, setDialog] = useState("");

    useEffect(()=>{
        (async () => {
            if (localStorage.getItem('email') != null || localStorage.getItem('email') != '') {
                const handleLogoutRes = await HandleLogout(localStorage.getItem('email'))
            }
        })();
    },[])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".")

        if (email === "" || password === "" || confirmPassword === "" || email === null || password === null || confirmPassword === null) {
            setDialog("All details are mandatory !");
        }

        else if (password !== confirmPassword) {
            setDialog("Password does not match !")
        }

        else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            setDialog("Please enter a valid e-mail address");
        }


        else {
            const userInput = {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };

            const accessFlag = await HandleSignup(userInput, setDialog);

            if (accessFlag === true) {
                event.target.email.value = ""
                event.target.password.value = ""
                event.target.confirmPassword.value = ""
                setDialog("User Registered Succesfully");
            }
        }
    };


    return (
        <div>
            <Navbar />
            <div id='login' style={{backgroundColor:"rgb(162, 221, 201)", height:"100vh" }}>
                <div className="wrapper">
                    <h1>Signup !</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter email" name="email" id="email" autoComplete="off" />
                        <input type="password" placeholder="Password" name="password" id="password" autoComplete="off" />
                        <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" autoComplete="off" />
                        <button className="btn2" type="submit">Sign up</button>
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
                        Already have an account? <a onClick={() => navigate('/login')} style={{ cursor: "pointer" }}>Login</a>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <h6 style={{ color: "red" }}>{dailog}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup