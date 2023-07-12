import SectionTitle from "../../../SectionTitle/SectionTitle";
import CircleProgress from "../../../CircleProgress/CircleProgress";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Slide } from "react-awesome-reveal";


const Skills = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <div id="skills">
            <div>
                <SectionTitle heading={"Skills"}></SectionTitle>
            </div>
            <ScrollTrigger onEnter={() => { setCounterOn(true) }} onExit={() => { setCounterOn(false) }}>

                <div className="ml-24 grid md:grid-cols-4 gap-10">
                    {counterOn && (
                        <Slide direction="left">
                            <CircleProgress rate={90} color1={'#fff'} color2={'#2ecc71'} color3={'#ffffff'} title={'HTML'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="right">
                            <CircleProgress rate={70} color1={'#fff'} color2={'#0000CC'} color3={'#ffffff'} title={'CSS'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="left">
                            <CircleProgress rate={80} color1={'#fff'} color2={'#FF3399'} color3={'#ffffff'} title={'Bootstrap'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="right">
                            <CircleProgress rate={75} color1={'#fff'} color2={'#0000CC'} color3={'#ffffff'} title={'Tailwind'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="left">
                            <CircleProgress rate={60} color1={'#fff'} color2={'#FFFF33'} color3={'#ffffff'} title={'Javascript'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="right">
                            <CircleProgress rate={70} color1={'#fff'} color2={'#0000CC'} color3={'#ffffff'} title={'ReactJs'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="left">
                            <CircleProgress rate={50} color1={'#fff'} color2={'#FF6666'} color3={'#ffffff'} title={'NodeJs'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="right">
                            <CircleProgress rate={60} color1={'#fff'} color2={'#FFFF33'} color3={'#ffffff'} title={'MongoDB'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="left">
                            <CircleProgress rate={50} color1={'#fff'} color2={'#FF6666'} color3={'#ffffff'} title={'Firebase'}></CircleProgress>
                        </Slide>
                    )}

                    {counterOn && (
                        <Slide direction="right">
                            <CircleProgress rate={50} color1={'#fff'} color2={'#FF6666'} color3={'#ffffff'} title={'JWT'}></CircleProgress>
                        </Slide>
                    )}
                </div>

            </ScrollTrigger>
        </div>
    );
};

export default Skills;
