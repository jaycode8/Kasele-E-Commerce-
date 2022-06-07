import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStar, faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import './TestCard.css'

const TestCard = (props) => {
       const { id,img, names, profession, talk } = props
       return (
              <div className="userCard" key={id}>
                     <div className="content"> 
                            <div className="before"></div>
                            <div className="img">
                                   <img src={img} />
                            </div>
                            <div className="media-icons">
                                   <a href='#' className="social" ><FontAwesomeIcon icon={faFacebookF}/></a>
                                   <a href='#' className="social" ><FontAwesomeIcon icon={faWhatsapp}/></a>
                                   <a href='#' className="social" ><FontAwesomeIcon icon={faInstagram}/></a>
                            </div>
                            <div className="name-profession">
                                   <span className="name">{names}</span>
                                   <span className="profession">{profession}</span>
                            </div>
                            <div className="theText">
                                   <p>
                                          {talk} 
                                   </p>
                            </div>
                     </div>
              </div>
       );
};

export default TestCard;