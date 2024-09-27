import React from "react";

const Footer = () => {
    return (
        <footer className="footer footer-center text-base-content bg-base-300 w-screen -mx-[calc((100vw-100%)/2)] mt-auto">
            <nav className="grid grid-flow-col gap-4 py-8">
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