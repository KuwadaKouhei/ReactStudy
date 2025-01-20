import './App.css';
import Navbar from './components/Navbar';
import NoteTitle from './components/NoteTitle';
import NoteContent from './components/NoteContent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <NoteTitle />
        <NoteContent />
      </div>
    </div>
  );
}

export default App;
