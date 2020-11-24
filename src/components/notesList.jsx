import React from 'react';
import NewNote from './newNote'

const mockNotes = [
    { creationDate: 'Nov 13, 2020, 12:34:05', title: 'OiOiOi', body: 'WaWoiWaWoiWaWoiWaWoiWaWoiWaWoiWaWoi' },
    { creationDate: 'Nov 13, 2020, 11:04:11', title: 'OiOiOi', body: 'WaWoiWaWoiWaWoiWaWoiWaWoiWaWoiWaWoi' },
    { creationDate: 'Nov 13, 2020, 1:22:39', title: 'OiOiOi', body: 'WaWoiWaWoiWaWoiWaWoiWaWoiWaWoiWaWoi' }
];

// Above is mock data to test the App


function NotesList(props) {
    return <div>
        {props.notes.map(note => 
            <NewNote 
                key={note.creationDate} 
                creationDate={note.creationDate}
                title={note.title}
                body={note.body}
            />
            )}
    </div>
}

export default NotesList;

