import { useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgress = ({ rate, color1, color2, color3, title }) => {
  const progressBarRef = useRef(null);
  const [animatedRate, setAnimatedRate] = useState(0);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    let observer;

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar();
          observer.unobserve(entry.target);
        }
      });
    };

    const animateProgressBar = () => {
      let start = 0;
      const step = rate > 0 ? (rate / 100) * 10 : 1;
      const animation = setInterval(() => {
        start += step;
        setAnimatedRate(start);
        if (start >= rate) {
          clearInterval(animation);
        }
      }, 10);
    };

    if (progressBar) {
      observer = new IntersectionObserver(handleIntersect, {
        rootMargin: "0px",
        threshold: 0.1
      });

      observer.observe(progressBar);

      return () => observer.disconnect();
    }
  }, [rate]);

  return (
    
    <div style={{ width: "200px" }}>
      <div ref={progressBarRef} className="space-y-5">
        {/* Wrap the children in a div */}
        <CircularProgressbar
          value={animatedRate}
          text={`${animatedRate}%`}
          styles={buildStyles({
            textColor: color1,
            pathColor: color2,
            trailColor: color3
          })}
        />
        <h3 className="text-center text-white text-2xl">{title}</h3>
      </div>
    </div>
    
  );
};

export default CircleProgress;
