import React from "react";
import AddIcon from '@mui/icons-material/Add';


const CreateNote = () => {

    const call = () => {
        return (alert("i got clicked"))
    };

    return <div className="createNote">
        <input type="text" placeholder="Title" />
        <textarea rows="3" cols="30" placeholder="Enter Note..."></textarea>
        <button className="btn" onClick={call}>
            <AddIcon className="addIcon" />
        </button>
    </div>
};

export default CreateNote;