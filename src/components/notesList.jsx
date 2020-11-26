import React from 'react';
import NewNote from './note'

function NotesList(props) {
    return <div className="d-flex background">
        {props.notes.map(note => 
            <NewNote 
                key={note.creationDate} 
                creationDate={note.creationDate}
                title={note.title}
                body={note.body}
                onDeleteNote={(compareCreationDate) => props.onDeleteNote(compareCreationDate)}
            />
        )}
    </div>
}

export default NotesList;

