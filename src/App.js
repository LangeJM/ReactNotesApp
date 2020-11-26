import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NoteInput from './components/noteInput.jsx';
import NotesList from './components/notesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  handleOnAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] }
    });
  }

  handleNoteDelete(creationDate) {
    const updatedNotesList = this.state.notes.filter(note => note.creationDate !== creationDate);
    this.setState({ notes: updatedNotesList });
  };


  render() {
    return(
      <div className="App">
        <NoteInput onAddNote={(newNote) => this.handleOnAddNote(newNote)} />
        <NotesList notes={this.state.notes} onDeleteNote={(creationDate) => this.handleNoteDelete(creationDate)}/>
      </div>
    );
  }
}

export default App;
