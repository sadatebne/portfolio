import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-transparent text-neutral-content border-t-8 border-green-300 mt-5">
                <div className="space-y-2 mx-auto">
                    <p className="text-4xl">Syed Sadat Ebne Mahmud </p>
                    <h3 className="text-2xl">Email: <span className="text-blue-500">syedsadat720@gmail.com</span></h3>
                    <h3 className="text-2xl" >Phone:+880-1724-426080</h3>
                    <h3 className="text-2xl">Address: Dhaka,Bangladesh</h3>
                </div>

                <div className="md:mx-auto">
                    <span className="footer-title text-4xl">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaFacebook size="4em" color="#0080FF"></FaFacebook></Link>
                        <Link to="https://www.linkedin.com/in/syed-sadat-ebne-mahmud/"><FaLinkedin size="4em" color="#0080FF"></FaLinkedin></Link>
                        <Link to="https://github.com/sadatebne"><FaGithub size="4em" color="#009900"></FaGithub></Link>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-transparent text-white">
                <div>
                    <p className="text-2xl">Copyright © 2023 - All right reserved by Syed Sadat Ebne Mahmud</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;