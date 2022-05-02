import './App.css'
import TeamSelector from './components/TeamSelector';
import TeamInfo from './components/TeamInfo';

function App() {
  return (
    <div className='App'>
      <h1>NHL</h1>

      <TeamSelector />

      <TeamInfo />


    </div>
  )
}

export default App;
