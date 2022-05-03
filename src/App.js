import './App.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import TeamSelector from './components/TeamSelector';
import TeamInfo from './components/TeamInfo';

function App() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios({
      url: `https://statsapi.web.nhl.com/api/v1/teams`,
      method: "GET",
      dataResponse: "json",
      params: {
        format: "json"
        }
      }).then(response => {
        console.log(response.data.teams)
        setTeams(response.data.teams)
      })
  }, [])

  return (
    <div className='App'>
      <h1>NHL</h1>

      <TeamSelector data={teams} />

      <TeamInfo />


    </div>
  )
}

export default App;
