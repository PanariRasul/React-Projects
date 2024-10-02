import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = () => {
    return <div className="note">
        <h3>Heading</h3>
        <p>Description</p>
        <button className="btn">
            <DeleteOutlineIcon className="dltIcon" />
        </button>
    </div>
}


export default Note;
