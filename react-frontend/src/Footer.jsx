import React from "react";

const Footer = () => {
    return (
        <footer className="footer footer-center text-base-content mt-64">
            <nav className="grid grid-flow-col gap-4">
                <p> © {new Date().getFullYear()} VerbalFlow</p>
                <p>•</p>
                <a className="link link-hover">Privacy Policy</a>
                <p>•</p>
                <a className="link link-hover">Imprint</a>
            </nav>
        </footer>
    )
}

export default Footer;