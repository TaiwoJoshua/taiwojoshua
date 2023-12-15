import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MotionComponent({ tag = "div", id = "", className = "", content = <h1>No Content Provided</h1> }) {
    const rand = Math.floor(Math.random() * 30);
    const motionVariants = {
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
    };
    if(rand < 10){
        motionVariants.hidden = { opacity: 0, x: "100%" };
    }else if(rand < 20){
        motionVariants.hidden = { opacity: 0 };
    }else{
        motionVariants.hidden = { opacity: 0, scale: 0 };
    }
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
    }, [controls, inView]);

    const MotionElement = motion[tag];
    return (
        <MotionElement
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={motionVariants}
            id={id}
            className={className}
        >
            { content }
        </MotionElement>
    )
}
