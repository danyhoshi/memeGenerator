import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Meme from "./components/Meme"

function App() {
  const [count, setCount] = useState(0)

  /**
   * Challenge: 
   * - Create a Meme component.
   * - Inside the Meme component, render a styled form
   *   with our 2 inputs and the button.
   * - Don't worry about adding any functionality yet
   */
  
      return (
          <div>
              <Header />
              <Meme />
          </div>
      )
  }
  

export default App;
