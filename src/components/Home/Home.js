import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHouse, faUser, faCouch, faEnvelopesBulk, faCartPlus, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import img1 from './img/bg.png'
import img2 from './img/bg1.png'
import img3 from './img/bg2.png'
import img4 from './img/bg3.png'
import img5 from './img/bg4.png'
import img6 from './img/bg5.png'


const toggleMenu = () =>{
    document.getElementById('nav').classList.toggle('navshow')
}

let imgs = [img1,img2,img3,img4,img5,img6];
let i =0;
const homeSlides = () =>{
    document.getElementById('slides').src = imgs[i];
    if (i < imgs.length-1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(homeSlides, 5000);
}
window.onload=homeSlides

const Home = () => {
    return (
        <div className="homePage" id="musyi">
            <header>
                <h1>Kas<span>ele</span></h1>
                <nav id="nav">
                    <ul>
                        <li><a href="#musyi"><FontAwesomeIcon icon={faHouse} onClick={toggleMenu}/></a></li>
                        <li><a href="#products"><FontAwesomeIcon icon={faCouch} onClick={toggleMenu}/></a></li>
                        <li><a href="#peopleSpeak"><FontAwesomeIcon icon={faMicrophone} onClick={toggleMenu}/></a></li>
                        <li><a href="#mailus"><FontAwesomeIcon icon={faEnvelopesBulk} onClick={toggleMenu}/></a></li>
                    </ul>
                    <FontAwesomeIcon icon={faTimes} className='times' onClick={toggleMenu}/>
                </nav>
                <FontAwesomeIcon icon={faBars} className='bars' onClick={toggleMenu}/>
            </header>
            <div className="col2 homeTextt">
                <section>
                    <h1>
                        <span>Kasele</span>
                        <br/>
                        Home Designs
                        <br />
                        Made Easy
                    </h1>
                    <p>
                        Come and expirince the best home cormfort with us in our premisses
                        at a cheap and affordable price.
                    </p>
                </section>
            </div>
            <div className="col2 image">
                <img id='slides'/>
            </div>
        </div>
    );
};

export default Home;
