import Menu from "./Menu";
import '../App.css';
import GitHub from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Mail from '../assets/email_C.png';

function Home() {
    return (
        <>
        <div className="home_menu">
            <h1>Bruno portifolio</h1>
            <Menu/>
        </div>
        <div className="footer">
            <div className="git_div">
                <a href="https://github.com/brunomartins009" target="_blank">
                    <img src={GitHub} alt="" className="git" width="35px" height="35px"/>
                </a>
            </div>
            <div className="insta_div">
                <a href="https://instagram.com/brunomartins009" target="_blank">
                    <img src={Instagram} alt="" className="insta" width="35px" height="35px"/>
                </a>
            </div>
            <div className="mail_div">
            <a href="mailto:martinscordeiro009@gmail.com" target="_blank">
                <img src={Mail} alt="" className="mail" width="35px" height="35px"/>
            </a>
            </div>
        </div>
        </>
    )
}

export default Home