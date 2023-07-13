import './About.css';
import seat from './imgs/seat.png'
import sofa from './imgs/sofa.png'

const About = () => {
    return (
        <div className='about'>
            <h1>Fetured Products</h1>
            <div className='featureProducts'>
                <section>
                    <div className='fcard'>
                        <img src={seat} alt='imgs'/>
                        <div className='innertext'>
                            <h4>Seating</h4>
                            <h3>New collection</h3>
                            <button>Shop Now</button>
                        </div>
                    </div>

                    <div className='fcard'>
                        <div className='innertext secondone'>
                            <h4>Modern</h4>
                            <h3>sofa furniture</h3>
                            <button>Shop Now</button>
                        </div>
                        <img src={sofa} alt='imgs'/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;