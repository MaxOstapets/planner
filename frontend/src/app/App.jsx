import './App.css';
import { Hat, NewNoteButton, Widget, NoteCard } from '../components';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchNotes = async () => {
  const res = await fetch("http://localhost:3000/notes/all")
  if (!res.ok) throw new Error("Fetch error")
  return res.json()
}

function App() {
  const [widget, setWidget] = useState(false)
  const handlerSetWidget = () => (setWidget(true), console.log("WIDGET STATE:", widget))

  const { data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  })

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
