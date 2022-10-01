
import './App.css';
import Facts from './Facts';
import Picture from './Picture';

function App() {
  return (
    <div>
      <div className='container'>
        <h1>About my</h1>
      </div>
      <div className='container'>
    <p>My name is Natalia.</p>
    </div>
    <div className='container'>
    <Picture/>
    </div>
    <div className='container'>
    <Facts/>
    </div>
    </div>
  );
}

export default App;
