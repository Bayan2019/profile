// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

// import bayan from './assets/image13_watercolor2.png'
import Header from './components/Header'
import './App.css'

import Resume from './pages/Resume/Resume'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <img src={bayan} alt="User Profile" width={200} height={200} />
      <h1 className='text-3xl font-bold underline'>
        Hello
      </h1> */}
      <Resume />
    </>
  )
}

export default App
