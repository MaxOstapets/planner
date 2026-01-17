import './App.css';
import { Hat, NewNoteButton, Widget, NoteCard } from '../components';
import { useState } from 'react';

function App() {
  const [widget, setWidget] = useState(false)
  const handlerSetWidget = () => (setWidget(true), console.log("WIDGET STATE:", widget))

  return (
    <>
      <Hat />
      <main>
        {widget && <Widget />}
        <NewNoteButton onClick={() => handlerSetWidget()} />
      </main>
    </>
  )
}

export default App;
