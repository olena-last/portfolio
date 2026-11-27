
import BasicSection from "@/components/ui/BasicSection";

export default function Projects() {
    return (
        <BasicSection
            id="projects-section"
            number="03"
            title="Projects"
            layout="stacked"
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            Content for the Projects section goes here. You can add more details about your projects, including descriptions, links, and images.
        </div>
        </BasicSection>
    );
}
