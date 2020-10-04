import React from 'react';

import StoreContext from '../Store/StoreContext'

const NotesForm = () => {
    const store = React.useContext(StoreContext)
    const [note, setNote] = React.useState("")
  
    return (
      <form 
        onSubmit={e => {
          store.addNote(note);
          setNote("")
          e.preventDefault();
        }}
      >
        <input value={note} onChange={ e => {
          setNote(e.target.value);
        }}></input>
        <button type="submit">add note</button>
      </form>
    )
  }
  
  export default NotesForm