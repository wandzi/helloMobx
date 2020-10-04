import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import StoreContext from './StoreContext'

const StoreProvider = ({ children }) => {
    const store = useLocalObservable(() => ({
      notes: ["Tide", "Wash"],
      addNote: (note) => {
        store.notes.push(note);
      }
    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider