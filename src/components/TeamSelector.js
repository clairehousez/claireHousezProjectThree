
const TeamSelector = (props) => {
    const handleClick = () => {
        console.log("click!")
    }

    return (
        <div className="team-dropdown">
            <select>
                { props.data.map((team) => {
                    return (
                        <option onClick={handleClick}>{team.name}</option>
                    )
                })}
            </select>

        </div>
    )

}

export default TeamSelector