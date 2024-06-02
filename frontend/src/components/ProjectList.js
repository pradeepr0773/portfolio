import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://portfolio-rfuk.onrender.com/projects');
                setProjects(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (isLoading) {
        return <div className='text-4xl border-b-4 mb-5 w-[290px] font-bold  m-5'> Projects Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
