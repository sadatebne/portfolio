
import { Slide } from 'react-awesome-reveal';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import ProjectsCart from './ProjectsCart/ProjectsCart';
import ProjectsCart2 from './ProjectsCart/ProjectsCart2';
import ProjectsCart3 from './ProjectsCart/ProjectsCart3';

const Projects = () => {


    return (
        <div id='project' className='my-16'>
            <SectionTitle heading={"projects"}></SectionTitle>
            <div>
                {/* 1st */}
                <div className='grid md:grid-cols-3 ml-4 md:ml-28 gap-10'>
                    <Slide direction="left">
                        <ProjectsCart></ProjectsCart>
                    </Slide>

                    <Slide direction="right">
                        <ProjectsCart2></ProjectsCart2>
                    </Slide>

                    <Slide direction="left">
                        <ProjectsCart3></ProjectsCart3>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Projects;
