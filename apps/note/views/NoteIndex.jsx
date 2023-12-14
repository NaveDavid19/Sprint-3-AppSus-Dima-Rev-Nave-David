const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { NoteAdd } from '../cmps/NoteAdd.jsx'
import { NoteEdit } from '../cmps/NoteEdit.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { noteUtilsService } from '../services/note.utils.service.js'

export function NoteIndex() {
  const [notes, setNotes] = useState(null)
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
    loadNotes()
  }, [])

  // *  --------------------------//CRUD HANDLE //---------------------------  * //

  function loadNotes() {
    noteUtilsService.loadNotes(setNotes)
  }

  function addNote(note) {
    noteUtilsService.addNote(note, setNotes)
  }

  function deleteNote(note) {
    noteUtilsService.deleteNote(note, setNotes)
  }

  function editNote(note) {
    noteUtilsService.editNote(note, setNotes)
  }

  function saveNote(note) {
    noteUtilsService.saveNote(note, setNotes)
  }

  //* -------------------------------------------------------------------------- //

  function todoToggle(note, todo) {
    noteUtilsService.todoToggle(note, todo, setNotes)
  }

  function changeBackgroundColor(colorHex, note) {
    noteUtilsService.changeBackgroundColor(colorHex, note, setNotes)
  }

  if (!notes) return <div>Loading... </div>
  return (
    <section className="note-index">
      <div className="search-title">
        <Link to={'search'}>
          <input type="text" placeholder="Search note" />
        </Link>
        <button>X</button>
      </div>
      <NoteAdd addNote={addNote} />
      <NoteList
        notes={notes}
        changeBackgroundColor={changeBackgroundColor}
        deleteNote={deleteNote}
        editNote={editNote}
        todoToggle={todoToggle}
      />

      {selectedNote && (
        <NoteEdit
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          saveNote={saveNote}
        />
      )}
    </section>
  )
}
