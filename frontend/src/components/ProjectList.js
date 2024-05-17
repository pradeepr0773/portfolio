import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3001/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto" id="project">
            <h3 className="text-4xl border-b-4 mb-5 w-[130px] font-bold">Projects</h3>
            <ul className="flex flex-row flex-wrap m-3 pl-5 text-xl">
                {projects.map(project => (
                    <li key={project._id} className="m-5 p-5 border-2 projectList">
                        <Link to={`/preview/${project._id}`} className="text-white hover:underline text-xl font-bold">
                            {project.name}
                        </Link>
                        <p className="text-xl">{project.skills}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
