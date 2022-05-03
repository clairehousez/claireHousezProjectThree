import { useState } from "react"

const TeamSelector = (props) => {
    
    const [teamChoice, setTeamChoice] = useState("placeholder")

    const getTeam = (e) => {
        setTeamChoice(e.target.value)
    }

    return (
        <form className="team-dropdown" onSubmit={(e) => props.displayTeam(e, teamChoice)}>
            <select onChange={getTeam} value={teamChoice}>
                { props.data.map((team) => {
                    return (
                        <option value={team.name} key={team.id}>{team.name}</option>

                    )
                })}
            </select>

            <button type="Submit">Submit</button>

        </form>
    )

}

export default TeamSelector