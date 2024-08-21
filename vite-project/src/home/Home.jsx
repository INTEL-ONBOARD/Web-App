import { useState } from 'react'
import Navbar from '../Navbar'
import './Home.css'
import NoteList from './NoteList';

function Home() {
  const [title,setTitle] = useState("Notes");

  return (
    <>
      <div className="home base flex flex-col items-center justify-center">
        <Navbar/>
        <div className="body-section 	tracking-tight text-8xl text-gray-500 md:text-2xl text-left  w-10/12  section" >
          <h2>{title}</h2>
          <NoteList/ >
        </div>

      </div>
    </>
  )
} 

export default Home;
