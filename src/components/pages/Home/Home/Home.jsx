import { useEffect, useState } from "react";
import ParticleBG from "../../../ParticleBG/ParticleBG";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import { PacmanLoader } from "react-spinners";
import './Home.css'
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
   
    const [light, setLight]=useState(false)
    
    return (
        <div>
            {
                loading ? <div className="home">
                    <PacmanLoader
                        color={"#36d7b7"}
                        loading={loading}
                        size={100}
                    />
                </div>
                    :
                    <div>
                        <Navbar></Navbar>
                        <Banner></Banner>
                        <AboutMe light={light}></AboutMe>
                        <Skills></Skills>
                        <Projects></Projects>
                        <Contact></Contact>
                        <Footer></Footer>
                        <ParticleBG></ParticleBG>
                    </div>
            }
        </div>
    );
};

export default Home;