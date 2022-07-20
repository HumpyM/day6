import './App.css';
import Counter from './components/counter';
import NoteContext from './context/noteContext';
import NoteState from './context/noteState';

function App() {
  return(
    <div className='App'>
      <NoteState>
        <Counter/>
      </NoteState>
    </div>
         
  );
  
}

export default App;
