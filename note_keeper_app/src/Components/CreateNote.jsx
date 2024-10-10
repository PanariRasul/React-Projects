import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


const CreateNote = () => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const InputEvents = (event) => {
        // Normal method
        // const value = event.target.value;
        // const name = event.target.name;

        //object destructring

        const { name, value } = event.target;


        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

    };

    const call = () => {
        return (alert("i got clicked"))
    };

    return <div className="createNote">
        <input type="text" value={note.title} onChange={InputEvents} name="title" placeholder="Title" />
        <textarea rows="3" cols="30" value={note.content} onChange={InputEvents} name="content" placeholder="Enter Note..."></textarea>
        <button className="btn" onClick={call}>
            <AddIcon className="addIcon" />
        </button>
    </div>
};

export default CreateNote;