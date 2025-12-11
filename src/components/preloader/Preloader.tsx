'use client';
import { useState, useEffect } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (

        <div className="preloader">
            <div className="preloader-content">
                <div className="logo">
                    <h1>Star MS Logistics</h1>
                </div>
                <div className="spinner"></div>
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>

    );
};

export default Preloader;