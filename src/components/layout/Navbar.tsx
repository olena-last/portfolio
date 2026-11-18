export default function Navbar() {
    return (
        <header className="flex items-center h-20 px-6 bg-background border-b border-hairline sticky top-0 z-50">
            <div className="page-container flex items-center justify-between">
                <a href="#hero-section" className="text-lg font-semibold text-foreground" aria-label="Home">
                    Olena Lastivka
                </a>
                <nav id="navbar" aria-label="Main navigation">
                    <ul className="flex items-center gap-8">
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#experience-section">Experience</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#skills-section">Skills</a></li>
                        <li><a href="#contact-section" className="rounded-full border border-accent px-5 py-2 hover:bg-accent transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}