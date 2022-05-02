import { useEffect, useState } from "react"
import axios from "axios"

function TeamInfo() {
    const [teamInfo, setTeamInfo] = useState([])

    useEffect(() => {
        axios({
            url: `https://statsapi.web.nhl.com/api/v1/teams?expand=team.stats`,
            method: "GET",
            dataResponse: "json",
            params: {
                format: "json"
            }
        }).then(response => {
            setTeamInfo(response.data)
            console.log(response.data)
        })
    }, [])



    return (
        <div className="teamInfo">

        

        </div>
    )
}

export default TeamInfo