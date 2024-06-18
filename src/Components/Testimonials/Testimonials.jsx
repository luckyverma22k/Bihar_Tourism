import React,{useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_4 from '../../assets/user-3.jpg'
import user_3 from '../../assets/user-4.jpg'

const Testimonials = () => {
   
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; // Corrected typo here
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`; // Corrected typo here
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>Ravi Sharma</h3>
                                    <span>Patna, Bihar</span>
                                </div>
                            </div>
                            <p>
                                Visiting Bihar was a mesmerizing experience. The historical sites, the culture, and the hospitality made it an unforgettable trip. I highly recommend exploring Bihar.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>Priya Verma</h3>
                                    <span>Gaya, Bihar</span>
                                </div>
                            </div>
                            <p>
                                My trip to Bihar was fantastic! Bodh Gaya is a must-visit, and the serenity of the place is beyond words. The local cuisine was also a highlight of the trip.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Amit Singh</h3>
                                    <span>Bhagalpur, Bihar</span>
                                </div>
                            </div>
                            <p>
                                Exploring the ancient ruins and temples in Bihar was an enriching experience. The state is rich in history and culture, and I learned so much during my visit.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>Sneha Gupta</h3>
                                    <span>Muzaffarpur, Bihar</span>
                                </div>
                            </div>
                            <p>
                                Bihar has so much to offer, from historical sites to beautiful landscapes. My family and I had a wonderful time visiting the various attractions and enjoying the local culture.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
