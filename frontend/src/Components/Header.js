import hero_img from '../Images/hero.png';
import apple_logo from '../Images/Apple-logo.png';
import google_playstore_png from '../Images/google playstore.png'

const Header = () => {
    return (
        <div>
            <header>
                <div className="container container_header">
                    <h1 className="header_title">E-GO! <br/>Application</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio consectetur suscipit architecto nobis placeat repellat ratione incidunt nemo nisi. Recusandae.</p>
                    <div className="header_img">
                        <img src={hero_img} alt=""/>
                    </div>
                    <div className="cta">
                        <a href="" className="btn btn-primary" target="_blank">
                            <div className="logo">
                                <img src={apple_logo} alt=""/></div>
                            <span>
                                <small>Download on the</small>
                                <h4>App Store</h4>
                            </span>
                        </a>
                        <a href="" className="btn btn-primary" target="_blank">
                            <div className="logo">
                                <img src={google_playstore_png} alt=""/></div>
                            <span>
                                <small>Download on the</small>
                                <h4>Play Store</h4>
                            </span>
                        </a>
                    </div>
                    <div className="header_socials">
                        <a href="" target="_blank"><i className="uil uil-facebook"></i></a>
                        <a href="" target="_blank"><i className="uil uil-instagram"></i></a>
                        <a href="" target="_blank"><i className="uil uil-linkedin"></i></a>
                        <a href="" target="_blank"><i className="uil uil-twitter"></i></a>
                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header