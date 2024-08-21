import { useState } from 'react'
import './Home.css'
import Note from './Note';

function NoteList() {

    const [noteset,setNoteset] = useState([{
        "id": 1,
        "title": "Meeting Notes",
        "content": "Discuss project milestones and assign tasks.",
        "tag": "Work",
        "date": "2024-08-21"
      },
      {
        "id": 2,
        "title": "Grocery List",
        "content": "Milk, Eggs, Bread, Butter",
        "tag": "Personal",
        "date": "2024-08-20"
      },
      {
        "id": 3,
        "title": "Book Ideas",
        "content": "Outline for the first chapter.",
        "tag": "Writing",
        "date": "2024-08-19"
      }]);


  return (
    <>
        <div className="listView flex content-center">            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-7 m-10">
                {
                    noteset.map( (note) => (
                        <Note note={note}/>
                    ))
                }
            </div>
        </div>
    </>
  )
} 

export default NoteList;
