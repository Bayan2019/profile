// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

// import bayan from './assets/image13_watercolor2.png'
// import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Resume from './pages/Resume/Resume'
import HomePage from './pages/HomePage';
import Projects from './pages/Projects/Projects';
import ProjectWhirl from './pages/ProjectWhirl';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/map' element={<MapComponent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login-code' element={<LoginCode  />} />
        <Route path='/profile' element={<Profile  />} />
        */}
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/resume' element={<Resume />} />
        <Route path='/projects/whirl' element={<ProjectWhirl />} />
        {/*<Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<TheNewsPage />} />
        <Route path='/polls' element={<Polls />} />
        <Route path='/objects/:id' element={<TheObjectPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
