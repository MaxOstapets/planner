import './App.css';
import { Hat, NewNoteButton, Widget, NoteCard } from '../components';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../api/getNotes.js';

function App() {
  const [widget, setWidget] = useState(false)
  const handlerSetWidget = () => (setWidget(true), console.log("WIDGET STATE:", widget))

  const { data: notes = [] } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  })

  return (
    <>
      <Hat />
      <main>
        <div className='notes'>
          {notes.map((el) =>
            <NoteCard
              id={el._id}
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
