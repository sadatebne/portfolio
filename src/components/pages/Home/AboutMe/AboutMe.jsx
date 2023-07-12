import Lottie from "lottie-react";
import About from '../../../../../public/About.json'
import './AboutMe.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Slide } from "react-awesome-reveal";

const AboutMe = ({light}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(light)
    return (
        <div id="about" className="flex flex-col-reverse md:flex-row items-center justify-around">
            <div className="lottie" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <Lottie animationData={About}></Lottie>
            </div>
            <div >
                <Slide direction="right">
                    <div className="w-2/3 text-center mx-auto my-16 ">
                        <h3 className="text-4xl md:text-8xl text-white font-semibold uppercase py-4">
                            <span style={{
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text', /* For Safari */
                                color: 'transparent',
                                backgroundImage: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
                                borderBottom: '8px solid',
                                borderColor: '#3b82f6'
                            }}>about me</span>
                        </h3>
                    </div>
                </Slide>
                <h1 className="text-3xl text-white about" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">As a junior MERN stack developer, I have successfully completed over 10 projects, showcasing my skills and expertise in web development using MongoDB, Express.js, React, and Node.js. These projects involved building dynamic and interactive web applications with seamless frontend-backend integration. I have gained experience in implementing RESTful APIs, handling database operations, and creating responsive user interfaces using modern JavaScript frameworks and libraries. </h1>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;