import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { useInView } from 'react-intersection-observer';

export default function MotionComponent({ tag = "div", id = "", className = "", content, direction = "left" }) {
    const motionVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: direction === "left" ? "100%" : "-100%" }
    };
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
