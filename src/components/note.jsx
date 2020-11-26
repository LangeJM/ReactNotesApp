import React from 'react';
import Toast from 'react-bootstrap/Toast';

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleNoteDelete() {
        const confirmDelete = window.confirm("Do you really want to delete the note?")
        if (confirmDelete == true) this.props.onDeleteNote(this.props.creationDate);
    }
    
    render() {
        return (
            <Toast className="m-1"  onClose={() => this.handleNoteDelete()}>
            <Toast.Header className="justify-content-between">
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-2">{this.props.title}</strong>
                <div className="d-inline-block"><small>{this.props.creationDate}</small></div>
            </Toast.Header>
            <Toast.Body className="text-dark font-weight-normal">{this.props.body}</Toast.Body>
            </Toast>
        )
  }
}
export default NewNote;


// onClose={(event) => this.props.handleNoteDelete(event.target.creationDate)



