import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";


function CreateEntery(emojiTerm) {
    return <Entery
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}

    />
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(CreateEntery)}

            </dl>
        </div>
    );
}

export default App;