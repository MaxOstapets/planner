import './App.css';
import { Hat, NewNoteButton, Widget, NoteCard } from '../components';

function App() {
  return (
    <>
      <Hat />
      <main>
        <Widget />
        <NewNoteButton />
        <NoteCard />
      </main>
    </>
  )
}

export default App;
