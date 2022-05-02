import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams",
      method: "GET",
      dataResponse: "json",
      params: {
        fomat: "json"
      },
    }).then((response) => {
      console.log(response)
      setTeams(response.data.teams)
    })
  }, [])

  return (
    <div className='App'>
      <h1>NHL</h1>

      {teams.map((team) => {
        return(
          <p>{team.name}</p>
        )
      })}
    </div>
  )
}

export default App;
