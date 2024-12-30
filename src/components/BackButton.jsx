import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const historyStack = useRef([]); // Track history manually

    useEffect(() => {
        // Add the current location to the history stack on each page visit
        const currentPath = location.pathname;
        const lastPath = historyStack.current[historyStack.current.length - 1];

        // Only push to the stack if it's a new path
        if (currentPath !== lastPath) {
            historyStack.current.push(currentPath);

            // Limit stack size to prevent memory issues
            if (historyStack.current.length > 50) {
                historyStack.current.shift();
            }
        }
    }, [location]);

    const handleBackClick = () => {
        if (historyStack.current.length < 2) {
            // If there's no meaningful history, go to the homepage
            navigate('/');
            return;
        }

        // Detect alternating patterns (e.g., A -> B -> A -> B)
        const stackLength = historyStack.current.length;
        const lastPath = historyStack.current[stackLength - 1];
        const secondLastPath = historyStack.current[stackLength - 2];
        const thirdLastPath = historyStack.current[stackLength - 3];
        const fourthLastPath = historyStack.current[stackLength - 4];

        if (
            lastPath === thirdLastPath &&
            secondLastPath === fourthLastPath &&
            lastPath !== secondLastPath
        ) {
            // If a looping pattern (A -> B -> A -> B) is detected, navigate to the homepage
            navigate('/');
        } else {
            // Otherwise, navigate back normally
            historyStack.current.pop(); // Remove the current page
            navigate(-1);
        }
    };

    return (
        <div className={`back-button`}>
            <Icon
                icon={faArrowLeft}
                className="home-btn"
                onClick={handleBackClick}
                style={{ fontSize: 40 }}
            />
        </div>
    );
};

export default BackButton;
