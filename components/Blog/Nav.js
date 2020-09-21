import React, { useState, useEffect } from "react";
import '../../static/css/Nav.css';

export default function Nav() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // TODO: Update this code
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
                <nav className="Nav">
                    <a href="/">Home</a>
                    <a href="/">Articles</a>
                    <a href="/">About</a>
                    <button>Logout</button>
                </nav>
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>
        </header>
    )
}