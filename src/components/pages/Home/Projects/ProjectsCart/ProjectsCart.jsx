import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../../../Modal/Modal';
import { Link } from 'react-router-dom';

const ProjectsCart = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const handleToggle = () => setOpen((prev) => !prev);
    return (
        <div
            className="card w-96 bg-base-100 shadow-xl h-[600px]">
            <figure
                style={{
                    overflow: "hidden",
                    height: "300px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src="https://i.ibb.co/BnCmzLG/project1.png"
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
                    <h2 className="card-title text-3xl font-bold">Harmony23</h2>
                    <span onClick={handleToggle}><FontAwesomeIcon icon={faEye} bounce size="xl" style={{ color: "#284b71", }} /> </span>
                </div>
                <p className='text-xl font-semibold'>A Music Instruments Learning Website </p>

                <h2 className="text-center text-xl font-bold ">Visit</h2>
                
                <div className='flex justify-between text-blue-500'>
                    <Link to="https://github.com/sadatebne/harmony23-project-client-side">GitHub Client</Link>
                    <Link to="https://github.com/sadatebne/harmony23-project-server-side">GitHub Server</Link>
                    <Link to="https://harmony23-5f1f2.web.app/">Live Site</Link>

                </div>
                
            </div>

            {/* Modal */}
            <Modal open={open}>
                <h3 className="font-bold text-3xl">
                    Harmony23
                </h3>
                <h3 className="font-bold text-2xl my-5">
                    Technology Uses
                </h3>
                <h3 className="font-bold text-lg ">
                    React Js | NodeJs | MongoDB | ExpressJs | Firebase | JWT | Tailwind | DaisyUI
                </h3>
                <h3 className="font-bold text-2xl my-5">
                    About Project
                </h3>
                <ul className='font-semibold text-lg space-y-4'>
                    <li>1. Harmony23 is a user-friendly MERN stack website that offers a wide range of
                        musical courses for browsing and purchasing, making it effortless for users to
                        find and buy the courses they desire</li>
                    <li>2. User can buy course but If there are no available seats, the student cannot buy
                        the course.
                    </li>
                    <li>3. Harmony23, administrators can manage user roles, assigning users as
                        admins or instructors, while instructors have the ability to create new courses</li>
                </ul>
                <div className="modal-action">
                    <label className="btn btn-primary btn-outline" onClick={handleToggle}>Close!</label>
                </div>
            </Modal>

        </div>
    );
};

export default ProjectsCart;