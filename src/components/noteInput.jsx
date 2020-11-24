import React from 'react';

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
      body: this.state.body
    };
    this.props.onAddNote(newNote);
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label className="flex largerMargin" htmlFor="title">Title:</label>
        <input
          className="flex borderRadius padding"
          name="title"
          type="text"
          value={title}
          onChange={event => this.handleTitleChange(event)}
        />
        <label className="flex largerMargin" htmlFor="body">Body:</label>
        <input
          className="flex largerBox borderRadius padding textAlign"
          name="body"
          type="text" 
          value={body}
          onChange={event => this.handleBodyChange(event)}
        />
        <input
          className="flex largerMargin borderRadius"
          type="submit"
          value="Submit" />
      </form>
    );
  }
}

export default NoteInput;