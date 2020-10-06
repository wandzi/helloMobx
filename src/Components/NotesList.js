import React from 'react';
import { Observer } from 'mobx-react-lite';

import StoreContext from '../Store/StoreContext'

const NotesList = () => {
    const store = React.useContext(StoreContext)

    return <Observer>{() => (
      <ul>
        {store.notes.map(note =>{
          return <li key={note}>{note}</li>
        })}
      </ul>
    )}</Observer>
  }

  export default NotesList