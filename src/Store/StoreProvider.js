import React from 'react';
import { runInAction } from "mobx";
import { useLocalObservable } from 'mobx-react-lite';
import StoreContext from './StoreContext';
import axios from 'axios';

const StoreProvider = ({ children }) => {

    const store = useLocalObservable(() => ({

      notes: ["Tide", "Wash"],
      isLoading: true,
      gnomes: [],

      addNote: (note) => {
        store.notes.push(note);
      },

      fetchGnomes: () => {
        axios.get('http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?_format=json&limit=10&offset=1')
          .then(res =>{
            runInAction(() => {
              store.gnomes = res.data
            })
          });
      },

      check: () => {
        console.log(store.gnomes);
        store.gnomes.map(gnome => console.log(gnome.name));
        store.isLoading = false;
        console.log(store.isLoading);
      }
      
    }));
  
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export default StoreProvider