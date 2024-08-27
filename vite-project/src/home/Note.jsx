import { useState } from 'react'

import './Home.css'

function Note(props) {
    const note = props.note;

    // const [date ,setDate] = useState(props.date);
    // const [tag,setTag] = useState(props.tag);
    // const [title,setTitle] = useState(props.title);
    // const [descriptipon , setDescription] = useState(props.descriptipon);

    return (
        <>
            <div key={note.id}>
                <div class="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-light text-gray-800 dark:text-gray-400">{note.date}</span>
                        <span class="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{note.tag}</span>
                    </div>

                    <div>
                        <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{note.title}</h1>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{note.content}</p>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Note;
