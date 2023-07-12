import { Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
    return (
        <Slide>
            <div className="w-1/3 text-center mx-auto my-20 ">
                <h3 className="text-4xl md:text-8xl font-semibold uppercase py-4">
                    <span style={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text', /* For Safari */
                        color: 'transparent',
                        backgroundImage: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)',
                        borderBottom: '8px solid',
                        borderColor: '#3b82f6'
                    }}>{heading}</span>
                </h3>

            </div>
        </Slide>
    );
};

export default SectionTitle;