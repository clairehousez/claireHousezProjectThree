import { useEffect, useState } from "react"
import axios from "axios"

function TeamSelector() {
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
            setTeams(response.data.teams)
            console.log(response.data.teams)
        })
    }, [])

    

    return (
        <div>
            <select>
                {teams.map((team) => {
                    return (
                        <option>{team.name}</option>
                    )
                })}
            </select>
            
        </div>
    )
}

export default TeamSelector