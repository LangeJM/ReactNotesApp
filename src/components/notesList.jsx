import React from 'react';
import Note from './note'

function NotesList(props) {
    return <div className="d-flex background">
        {props.notes.map(note => 
            <Note 
                key={note.creationDate} 
                creationDate={note.creationDate}
                title={note.title}
                body={note.body}
                lastUpdate={note.lastUpdate}
                onDeleteNote={(compareCreationDate) => props.onDeleteNote(compareCreationDate)}
                onShowModal={(noteProps) => props.onShowModal(noteProps)}
            />
        )}
    </div>
}

export default NotesList;

