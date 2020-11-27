import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NoteInput from './components/noteInput.jsx';
import NotesList from './components/notesList';
import ReactModal from 'react-modal';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      modal_show: false,
      noteProps: {
      }
    }
  }

  componentDidMount() {
    ReactModal.setAppElement('body');
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

  onShowModal(noteProps) {
    this.setState({ noteProps: noteProps });
    if (this.state.modal_show === false) this.setState({ modal_show: true })
    else this.setState({ modal_show: false })
  }

  hideModal() {
    this.setState({ modal_show: false })
  }

  updateModal() {
    let newUpdate = new Date();
    newUpdate = newUpdate.toString().split(' ');
    const lastUpdate = `Last update: ${newUpdate[1]} ${newUpdate[2]}, ${newUpdate[3]}, ${newUpdate[4]}`;
    
    const { title, body, creationDate } = this.state.noteProps;
    for (let note of this.state.notes) {
      if (note.creationDate === creationDate) {
        note.title = title;
        note.body = body;
        note.lastUpdate = lastUpdate;
      }
    }
    this.setState({ modal_show: false })
  }

  handleTitleChange(event) {
    this.setState({ noteProps: { ...this.state.noteProps, title: event.target.value } });
  }

  handleBodyChange(event) {
    this.setState({ noteProps: { ...this.state.noteProps, body: event.target.value } });
  }

  render() {
    
    return (
      
      <div className="App">
        <NoteInput onAddNote={(newNote) => this.handleOnAddNote(newNote)} />
        <NotesList notes={this.state.notes}
          onDeleteNote={(creationDate) => this.handleNoteDelete(creationDate)}
          onShowModal={(noteProps) => this.onShowModal(noteProps)}
          />
        <ReactModal 
           appElement={document.getElementById('app')}
           isOpen={this.state.modal_show}
           contentLabel="Inline Styles Modal Example"
           style={{
              overlay: {
                backgroundColor: 'papayawhip'
              },
              content: {
                color: 'lightsteelblue'
              }
            }}
        > 
          
          <Form.Group>
            <Form.Label className="flex largerMargin" htmlFor="title">Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={this.state.noteProps.title} onChange={event => this.handleTitleChange(event)}/>
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group >
            <Form.Label className="flex largerMargin" htmlFor="body">Body:</Form.Label>
            <Form.Control as="textarea" rows={3}
            name="body"
            type="text" 
            value={this.state.noteProps.body}
            required
            onChange={event => this.handleBodyChange(event)} />
          </Form.Group>
            <button className="m-1" onClick={() => this.hideModal()}>Close</button>
            <button className="m-1" onClick={(event) => this.updateModal(event)}>Save</button>
        </ReactModal>
        
      </div>
    ) 
    }  
}

export default App;

