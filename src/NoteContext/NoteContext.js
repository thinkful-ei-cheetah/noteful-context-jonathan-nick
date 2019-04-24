import React from 'react'

const NoteContext = React.createContext({
  folders: [],
  notes: [],
  deletenote: () => {}
});

export default NoteContext