// contactlink.jsx

import React from 'react';
import styles from "./contactlink.module.css";

export default function ContactLink() {
    return (
        <div className="w-full">
            <a href="#contact" className={`outline-none ${styles.hireMeBanner}`}>
                <div className={`flex justify-center items-center py-1 text-white text-xs sm:text-sm md:text-base ease-in-out transition-all tracking-wider sm:font-medium w-full ${styles.hireMeBanner}`}>
                    Like my work? Click here to connect with me!
                </div>
            </a>
        </div>
    );
}
