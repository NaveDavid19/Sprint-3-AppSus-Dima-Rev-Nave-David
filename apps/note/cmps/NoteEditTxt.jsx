const { useState } = React

import { ColorButtonsAdd } from './ColorButtons.jsx'
import { noteService } from '../services/note.service.js'

export function NoteEditTxt({ selectedNote, setSelectedNote, saveNote }) {
  const [currNote, setCurrNote] = useState(selectedNote)
  const [newNoteInfo, setNewNoteInfo] = useState({
    title: currNote.info.title,
    txt: currNote.info.txt,
  })
  const [backgroundColor, setBackgroundColor] = useState(
    currNote.style.backgroundColor
  )
  console.log(currNote)
  function onSubmitHandle(ev) {
    ev.preventDefault()
    let emptyNote = currNote
    emptyNote.info = { ...emptyNote.info, ...newNoteInfo }
    emptyNote.style = { backgroundColor }
    saveNote( emptyNote )
  }

  function onChangeHandle(ev) {
    const target = ev.target
    const field = target.name
    const value = target.value

    setNewNoteInfo({ ...newNoteInfo, [field]: value })
  }

  function changeBackgroundColor(colorHex) {
    setBackgroundColor(colorHex)
  }

  return (
    <section className="note-edit-prev-wrapper">
      <form
        className="note-edit"
        style={{ backgroundColor }}
        onSubmit={onSubmitHandle}>
        <input
          className="title-input"
          required
          onChange={onChangeHandle}
          value={newNoteInfo.title}
          type="text"
          placeholder="Title"
          name="title"
          id="title"
        />
        <textarea
          className="txt-input"
          onChange={onChangeHandle}
          value={newNoteInfo.txt}
          rows="4"
          cols="50"
          placeholder="Take a note..."
          name="txt"
          id="txt"
        />
        <div className="add-buttons-section">
          <section className="add-buttons">
            <button type="submit">
              <i class="fa-solid fa-plus"></i>
            </button>
            <ColorButtonsAdd changeBackgroundColor={changeBackgroundColor} />
          </section>
        </div>
      </form>
    </section>
  )
}
