import React from 'react';

function NewNote(props) {
    return <div>
        <p>{props.creationDate}</p>
        <p>{props.title}</p>
        <p>{props.body}</p>
    </div>
}

export default NewNote;