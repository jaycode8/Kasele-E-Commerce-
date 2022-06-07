import './Contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faWhatsapp, faInstagram, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
       return (
              <div className='Conta' id='mailus'>
                     <div className="conta-card">
                            <div className="float-card">
                                   <div className="details">
                                          <h4>Contact Us</h4>
                                          <section>
                                                 <a href='#'><FontAwesomeIcon icon={faFacebookF}/></a>
                                                 <a href='#'><FontAwesomeIcon icon={faWhatsapp}/></a>
                                                 <a href='#'><FontAwesomeIcon icon={faInstagram}/></a>
                                                 <a href='#'><FontAwesomeIcon icon={faEnvelope}/></a>
                                          </section>
                                   </div>
                            </div>
                            <div className="inner-card">
                                   <h3>Get in touch</h3>
                                   <p>Feel free to drop us a line below...</p>
                                   <form>
                                          <input type="name" placeholder="user name" required />
                                          <input type="email" placeholder="email address" required />
                                          <textarea placeholder="leave message" required></textarea>
                                          <input type="submit" value="send" />
                                   </form>
                            </div>
                     </div>
              </div>
       );
};

export default Contact;