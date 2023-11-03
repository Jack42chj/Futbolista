import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LandingOne from "../components/landing/LandingOne";
import LandingTwo from "../components/landing/LandingTwo";
import LandingThree from "../components/landing/LandingThree";
import LandingFour from "../components/landing/LandingFour";

const Landing = () => {

    const [currentPage, setCurrentPage] = useState<number>(0);
    const totalPages = 4;
    
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            if (e.deltaY > 0) {
                if (currentPage < totalPages - 1) {
                    setCurrentPage(currentPage + 1);
                }
            } else if (e.deltaY < 0) {
                if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [currentPage]);

    useEffect(() => {
        const posY = currentPage * window.innerHeight;
        window.scrollTo({ top: posY, behavior: 'smooth' });
    }, [currentPage]);


    return(
        <div>
            <Header />
            <LandingOne />
            <LandingTwo />
            <LandingThree />
            <LandingFour />
        </div>
    )
}

export default Landing;