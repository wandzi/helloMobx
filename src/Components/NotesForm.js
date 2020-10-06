import React from 'react';
import { Observer } from 'mobx-react-lite';

import StoreContext from '../Store/StoreContext'

const NotesForm = () => {

  const store = React.useContext(StoreContext)
  const [note, setNote] = React.useState("")

  return <Observer>{() => (
    <>
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
      <hr />
      <ul>
        {store.gnomes.map(gnome =>{
          return <li key={gnome.id}>{gnome.name}</li>
        })}
      </ul>
      <button onClick={ () => store.fetchGnomes()}>Fetch!</button>
    </>
  )}</Observer>
}
  
  export default NotesForm