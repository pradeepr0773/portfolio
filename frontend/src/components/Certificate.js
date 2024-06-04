import { Link } from 'react-router-dom';
import '../App.css';

function Certificate() {
    return (
        <>
            <h1 className="text-4xl border-b-4 mb-5 w-[170px] font-bold  m-5">Certificate</h1>
            <div className='projectList m-5 p-5 custom-cer ' id='certificate'>
                <ul className="flex flex-row justify-around custom-cer  m-5 pb-5 text-2xl text-white">
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/hszRx8F1Ec' target="_blank" rel="noopener noreferrer">MongoDB</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/gdk3HDJ7WH' target="_blank" rel="noopener noreferrer">ExpressJs</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/leZUbXT8U6' target="_blank" rel="noopener noreferrer">React Js</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/dyNNO0xLI5' target="_blank" rel="noopener noreferrer">Node Js</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/Tr-76zK2oc' target="_blank" rel="noopener noreferrer">HTML</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/Bmca81Fk9U' target="_blank" rel="noopener noreferrer">CSS</Link></li>
                    <li className='customView'><Link to='https://moonshot.scaler.com/s/sl/2zMWpoTfXx' target="_blank" rel="noopener noreferrer">Javascript</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Certificate;
