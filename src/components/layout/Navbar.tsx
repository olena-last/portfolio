'use client';

export default function Navbar() {
    return (
        <nav id="navbar" className="sticky top-0 z-50">
            <button id="nav-home" onClick={() => window.location.href = '#hero-section'}>
                Home
            </button>
            <button id="nav-about" onClick={() => window.location.href = '#about-section'}>
                About
            </button>
            <button id="nav-experience" onClick={() => window.location.href = '#experience-section'}>
                Experience
            </button>
            <button id="nav-projects" onClick={() => window.location.href = '#projects-section'}>
                Projects
            </button>
            <button id="nav-skills" onClick={() => window.location.href = '#skills-section'}>
                Skills
            </button>
            <button id="nav-contact" onClick={() => window.location.href = '#contact-section'}>
                Contact
            </button>
        </nav>
    );
}