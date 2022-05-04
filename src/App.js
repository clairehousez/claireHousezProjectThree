import { useEffect, useState } from "react";
import axios from 'axios';
import TeamSelector from './components/TeamSelector';
import TeamInfo from './components/TeamInfo';
import "./App.css"


function App() {
  const [teams, setTeams] = useState([])

  const [finalTeam, setFinalTeam] = useState({})

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

  const displayTeam = (e, teamName) => {
    e.preventDefault()
    console.log(teamName)

    const singleTeam = teams.forEach(team => {
      if (team.name === teamName) {setFinalTeam(team)}
    })

    console.log(singleTeam)

  }

  return (
    <div className='App'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Koulen&family=Lato&display=swap');
      </style> 
      
      <header>
        {/* header */}
      </header>
      <main>
      <h1>Slapshot</h1>
        <div className="wrapper">
          <TeamSelector key={teams} data={teams} displayTeam={displayTeam} />
      

          <TeamInfo finalTeam={finalTeam} />
        </div>
      </main>
      <footer>
        <p>Created at Juno College of Technology</p>
      </footer>
    </div>
  )
}

export default App;
