import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList';
import ProjectPreview from './components/ProjectPreview';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
    <Header />
       <Profile />
       <About />
     <Skills /> 
      <Router>
        <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/preview/:projectId" element={<ProjectPreview />} />
        </Routes>
      </Router> 
       <Contact />
    </div>
  );
}

export default App;
 