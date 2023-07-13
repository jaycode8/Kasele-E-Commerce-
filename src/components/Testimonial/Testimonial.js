import './Testimon.css'
import Users from "./User";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestCard from './TestCard';

const Testimonial = () => {
       return (
              <div className='testPage' id="peopleSpeak">
                     <h1>Testimonials.</h1>
                     <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            className='swiper'
                     >
                            {
                                   Users.map((user) =>(
                                          <SwiperSlide className='swiperSlide' key={user.id}>
                                                 <TestCard 
                                                        names={user.names}  
                                                        img = {user.img}
                                                        talk = {user.talk}
                                                        profession = {user.profession}
                                                 />
                                          </SwiperSlide>
                                   ))
                            }
              </Swiper>
              </div>
       );
};

export default Testimonial;