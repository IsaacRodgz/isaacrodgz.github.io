import './App.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, HashRouter } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDisplay = lazy(() => import('./pages/ProjectDisplay'));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
