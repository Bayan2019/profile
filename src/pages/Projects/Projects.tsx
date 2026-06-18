import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { PROJECTS } from "../../constants/projects";

const Projects = () => {
    return (
        <>
            <Header />
            <section className="bg-[#96DEAE] overflow-hidden py-20">
                <h1>Projects</h1>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROJECTS.map(card => (
                        <ProjectCard key={card.href} project={card} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects;