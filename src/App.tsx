
import './App.css';
import { WordSearch } from './components/WordSearch';
import { DefinitionDisplay } from './components/DefinitionDisplay';

function App() {
  return (
    <>
      <h1>Dictionary</h1>
      <WordSearch />
      <hr />
      <DefinitionDisplay />
    </>
  );
}

export default App;


