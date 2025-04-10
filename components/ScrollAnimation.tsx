'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
}

export default function ScrollAnimation({ children, className }: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 70, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
