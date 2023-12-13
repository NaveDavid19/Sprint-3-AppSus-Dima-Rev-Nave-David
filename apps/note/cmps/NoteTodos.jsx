export function NoteTodos({ note }) {

  return (
    <article className="note-preview">
      <h2>{note.info.title}</h2>
      {note.info.todos && note.info.todos.map(todo => {
        return (
          <li>{todo.txt}</li>
        )
      })}
    </article>
  )
}
