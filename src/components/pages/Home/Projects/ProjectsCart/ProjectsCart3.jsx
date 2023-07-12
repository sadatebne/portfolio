import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../../../Modal/Modal';
import { Link } from 'react-router-dom';

const ProjectsCart3 = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((prev) => !prev);
    return (
        <div className="card w-96 bg-base-100 shadow-xl h-[600px]">
            <figure
                style={{
                    overflow: "hidden",
                    height: "300px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src="https://i.ibb.co/ckY52K9/project3.png"
                    alt="Shoes"
                    style={{
                        objectFit: "cover",
                        objectPosition: isHovered ? "bottom" : "top",
                        height: "100%",
                        width: "100%",
                        transition: "ease-in-out 8s", // Added transition property
                    }}
                />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-3xl font-bold">Recipes</h2>
                    <span onClick={handleToggle}><FontAwesomeIcon icon={faEye} bounce size="xl" style={{ color: "#284b71", }} /> </span>
                </div>
                <p className='text-xl font-semibold'>A Recipe Find Based Website </p>

                <h2 className="text-center text-xl font-bold ">Visit</h2>

                <div className='flex justify-between text-blue-500'>
                    <Link to="https://github.com/sadatebne/recipes-project-client-side">GitHub Client</Link>
                    <Link to="https://github.com/sadatebne/recipes-project-server-side">GitHub Server</Link>
                    <Link to="https://recipes-react-web.web.app/">Live Site</Link>

                </div>

            </div>

            {/* Modal */}
            <Modal open={open}>
                <h3 className="font-bold text-3xl">
                    Recipes
                </h3>
                <h3 className="font-bold text-2xl my-5">
                    Technology Uses
                </h3>
                <h3 className="font-bold text-lg ">
                    React Js | NodeJs | MongoDB | ExpressJs | Firebase | React-Bootstrap | Rest
                </h3>
                <h3 className="font-bold text-2xl my-5">
                    About Project
                </h3>
                <ul className='font-semibold text-lg space-y-4'>
                    <li>1. A comprehensive web platform that enables users to find and explore a vast
                        collection of diverse recipes</li>
                    <li>2. Implemented intuitive search functionality, empowering users to discover
                        recipes based on ingredients, dietary preferences, and cooking time
                    </li>
                    <li>3. Designed an appealing and visually engaging interface, enhancing the user
                        experience and encouraging recipe exploration and experimentation.</li>
                </ul>
                <div className="modal-action">
                    <label className="btn btn-primary btn-outline" onClick={handleToggle}>Close!</label>
                </div>
            </Modal>

        </div>
    );
};

export default ProjectsCart3;