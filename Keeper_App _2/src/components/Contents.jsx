import React from "react";
import Note from "./Note";
import notes from "../notes"
function noteItem(details) {
    return (
        <Note
            key={details.key}
            title={details.title}
            content={details.content}
        />
    )
}
const contents = () => {
    return (<div className='Container'>
        {notes.map(noteItem)}
    </div>
    )
}

export default contents;