import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function ProjectPreview() {
    const { projectId } = useParams(); // Get projectId from the URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/projects/${projectId}`);
                setProject(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching project:', error);
                setError('Error fetching project. Please try again later.');
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    return (
        <div className="container mx-auto gap-2" id="projectPreview">
            <h3 className="text-4xl border-b-4 mb-5 w-[270px] font-bold">Projects Preview</h3>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {project && (
                <div className="p-5 border-2 projectList">
                    
                    <h2 className="text-xl font-bold">Project Title :</h2>
                    <h2 className='text-xl ml-5'>{project.name}</h2>
                    <p className="text-xl font-bold" >Key Skills:</p>
                    <p className="text-xl ml-5">{project.skills}</p>
                    <p className="text-xl font-bold">Description:</p>
                    <p className="text-xl ml-5">{project.description}</p>
                    <div className="text-center">
                    <button className="border-0 p-2 shadow-xl font-bold shadow-gray-500/50 rounded-full bg-gray-600 text-white text-xl">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                            View Live
                        </a>
                    </button>
                    </div>
                </div>
            )}
        </div>
    );
}
