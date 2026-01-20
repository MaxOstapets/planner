import './App.css';
import { Hat, NewNoteButton, Widget, NoteCard } from '../components';
import { useState, useEffect } from 'react';

function App() {
  const [widget, setWidget] = useState(false)
  const [notes, setNotes] = useState([])
  const handlerSetWidget = () => (setWidget(true), console.log("WIDGET STATE:", widget))

  useEffect(() => {
    fetch("http://localhost:3000/notes/all")
      .then(res => res.json())
      .then(data => {
        setNotes(data)
        console.log(data)
      })
  }, [])

  return (
    <>
      <Hat />
      <main>
        <div className='notes'>
          {notes.map((el) =>
            <NoteCard
              title={el.title}
              level={el.level}
              description={el.description}
              listTitle={el.listTitle}
              list={el.list}
              key={el._id}
            />)}
        </div>
        {widget && <Widget />}
        <NewNoteButton onClick={() => handlerSetWidget()} />
      </main>
    </>
  )
}

export default App;
