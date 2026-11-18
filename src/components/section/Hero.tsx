export default function Hero() {
    return (
        <section id="hero-section" className="section bg-background py-24">
            <div className="page-container">
                <p className="mt-6 text-lg text-text-secondary">
                    Full-stack Developer • South Korea
                </p>
                <h1 className="text-5xl font-bold text-foreground">
                    Hello, I'm Olena
                </h1>
                <p className="mt-6 text-lg text-text-secondary">
                    Frontend in HTML, CSS and JavaScript. Backend in PHP. One person who can take a feature from the template to the database and back.
                </p>
                <button className="mt-8 rounded-full bg-accent px-8 py-3 text-foreground">
                    View My Projects
                </button>
            </div>
        </section>
    );
}