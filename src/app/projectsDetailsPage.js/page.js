// pages/projects/[projectName].js
import { useRouter } from 'next/router';
import projects from '../../../public/projects.json';

export default function ProjectDetailsPage() {
    const router = useRouter();
    const { projectName } = router.query;

    // Find the project data based on the projectName
    const project = projectsData.find((project) => project.name === projectName);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <p>{project.date}</p>
            {/* Add more details as needed */}
        </div>
    );
}
