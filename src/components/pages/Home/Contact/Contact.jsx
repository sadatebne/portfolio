import Lottie from "lottie-react";
import ContactImg from "../../../../../public/Contact.json"
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from "react-awesome-reveal";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_arz3w3e', 'template_dhmnnfl', form.current, '4Aw2TQV9tbi8kedpa')
            .then((result) => {
                console.log(result.text);
                toast.success("Mail Sent Successfully!");
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact">
            <SectionTitle heading={"Contact"}></SectionTitle>
            <div className="flex flex-col md:flex-row justify-around items-center text-white">
                <Slide>
                    <div>
                        <Lottie animationData={ContactImg}></Lottie>
                    </div>
                </Slide>
                
                <div className="w-full md:w-1/2 ">

                    <form ref={form} onSubmit={sendEmail}>
                        <Slide direction="right">
                            <div className="form-control w-full">
                                <label className="label ml-10">
                                    <span className="text-2xl font-semibold">Your Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Type here" className="input input-bordered input-warning mx-10 p-10 text-white bg-transparent text-xl" />
                            </div>
                        </Slide>

                        <Slide direction="right">
                            <div className="form-control w-full my-5">
                                <label className="label ml-10">
                                    <span className="text-2xl font-semibold">Your Email</span>
                                </label>
                                <input type="text" name="user_email" placeholder="Type here" className="input input-bordered input-warning mx-10 p-10 text-white bg-transparent text-xl" />
                            </div>
                        </Slide>

                        <Slide direction="right">
                            <div className="form-control w-full">
                                <label className="label ml-10">
                                    <span className="text-2xl font-semibold">Massage</span>
                                </label>
                                <textarea name="message" className="textarea textarea-warning mx-10 p-10 text-white bg-transparent text-xl" placeholder="Bio"></textarea>
                            </div>
                        </Slide>

                        <Slide direction="right">
                            <div className="form-control w-1/3">
                                <button className="btn btn-outline btn-success ml-10 my-5 text-xl">
                                    <span className="inline md:hidden">
                                        <FontAwesomeIcon icon={faPaperPlane} bounce size="2x" />
                                    </span>
                                    <span className="hidden md:inline">
                                        Send <FontAwesomeIcon icon={faPaperPlane} bounce size="2x" />
                                    </span>
                                </button>
                            </div>
                        </Slide>
                    </form>

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;