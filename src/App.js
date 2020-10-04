import React from 'react';
import StoreProvider from './Store/StoreProvider'
import NotesList from "./Components/NotesList"
import NotesForm from "./Components/NotesForm"
import './App.css';

function App() {
  return (
    <StoreProvider>
      <main>List</main>
      <NotesList />
      <NotesForm />
    </StoreProvider>
  );
}

export default App
