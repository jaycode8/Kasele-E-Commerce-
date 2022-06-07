import './Footer.css';

const Footer = () => {
       return (
              <div className='footerComponent'>
                     <footer>
                            <section className='foots'>
                                   <div>
                                          <h4>Privacy Policy</h4>
                                          <h4>Terms & Condition</h4>
                                          <h4>Products</h4>
                                   </div>
                                   <div>
                                          <h4>Shipping info</h4>
                                          <h4>Contacts</h4>
                                          <h4>Shopping Cart</h4>
                                   </div>
                            </section>
                            <section className='copyright'>
                                   <p>&copy;<span> {new Date().getFullYear()}</span> <a href='#'>JayTech</a> | All Rights Reserved</p>
                            </section>
                     </footer>
              </div>
       );
};

export default Footer;