import { useState } from 'react'
{/* 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/}
import { BrowserRouter } from 'react-router-dom'
import Navbar from './header/navbar.jsx'
import Home from './Home/Home.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>

    <Home />  
      
      {/* 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      */}

      <footer>
        End - footer section
      </footer>

    </>
  )
}

export default App

{/*

VITA 0.1 Documentations

README
------------------------------------
Built with Vite and React, how to use
1. Install stack with npm, list below 
2. Create or modify page jsx and add Components from Components, pass Props for Components values
3. Styling handled in App.css with SASS
4. React router for single page simulation, virtual DOM loading of pages
5. Use MUI for complete Boilerplate version - or overwrite with own custom styling
6. Future design system variant from Boilerplate version


STACK
------------------------------------
1. React
2. Vite
3. MUI
4. SASS
5. React Router

TO DO & CHANGELOG
------------------------------------
v.01
Add MUI
Add SASS
Complete menu
-- add page routing
-- dynamic mobile menu header
-- change mobile logo to burger or icon
[v] Blog component
Add content manually
Content editing with mdx like Gatsby

v.02
Look into Hooks
Look into emotion
Look into fixing jsx vs tsx syntax conflicts
Create batch npm installation
Add documentaion mdx
Upload to Github

v.03
Create Design System version using MUI

*/}
