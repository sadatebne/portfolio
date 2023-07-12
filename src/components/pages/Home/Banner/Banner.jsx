import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Tilt from 'react-parallax-tilt';
import { JackInTheBox, Slide } from "react-awesome-reveal";




const Banner = () => {

    return (
        <div id='banner' className='banner flex flex-col md:flex-row items-center justify-around gap-10 space-y-10'>
            <Slide direction='left'>
            <div className='mt-32 md:mt-0 text-center md:text-left text-white space-y-10'>
                <h3 className="text-3xl">Hi 👋 I Am,</h3>
                <h1 className="text-5xl">Syed Sadat Ebne Mahmud</h1>
                <h1 className="text-5xl">I am Working as a Junior</h1>
                    <h3 className="text-5xl">
                        <Typewriter
                            words={[' MERN Stack Developer ', ' Full-Stack Developer', ' Front-End Developer']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        >
                        </Typewriter>
                    </h3>
                
                <div className='flex flex-col items-center md:flex-row gap-10'>
                    <a href="Resume of Sadat.pdf" download="Resume of Sadat.pdf">
                        <button className="btn btn-outline btn-warning w-56 h-20 text-xl">Download CV <FontAwesomeIcon icon={faDownload} bounce /></button>

                    </a>

                    <button className="btn btn-outline btn-primary w-56 h-20 text-xl">Contact</button>
                </div>
            </div>
            </Slide>
            <div>
                <JackInTheBox>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}
                    >
                        <img className='banner-img' src="https://i.ibb.co/FJ2Qj0N/image2.png" alt="" style={{ width: "800px", height: "1000px" }} />
                    </Tilt>
                </JackInTheBox>
            </div>
        </div>
    );
};

export default Banner;