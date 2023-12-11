import { Routes, Route } from 'react-router-dom'
import Homepage from '../../../pages/Home.jsx'
import About from '../../../pages/About.jsx'
import Projects from '../../../pages/Projects.jsx'
import Sub from '../../../pages/Sub.jsx'
import Header from './Header.jsx'

const Nav = () => {
  return (
    <>
    <Header />
     {/* 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sub" element={<Sub />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
    </Routes>
    */}
    </>  
  )
}

export default Nav