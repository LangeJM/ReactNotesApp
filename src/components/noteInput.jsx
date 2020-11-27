import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  handleTitleChange(event) {
      this.setState({ title: event.target.value });
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newDate = new Date();
    newDate = newDate.toString().split(' ');
    const creationDate = `${newDate[1]} ${newDate[2]}, ${newDate[3]}, ${newDate[4]}`;
    const newNote = {
      creationDate: creationDate,
      title: this.state.title,
      body: this.state.body,
      lastUpdate: ' '
    };
    this.props.onAddNote(newNote);
    this.setState({ title: '', body: '' });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="mt-3 mb-4">
        <strong className="h1 text-dark">Note Taking App</strong>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Label className="flex largerMargin" htmlFor="title">Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={event => this.handleTitleChange(event)}/>
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group >
            <Form.Label className="flex largerMargin" htmlFor="body">Body:</Form.Label>
            <Form.Control as="textarea" rows={3}
            name="body"
            type="text" 
            value={body}
            required
            onChange={event => this.handleBodyChange(event)} />
          </Form.Group>
          <Button variant="primary" 
            type="submit">
          Submit
          </Button>
      </Form>
        </div>
    );
  }
}

export default NoteInput;

