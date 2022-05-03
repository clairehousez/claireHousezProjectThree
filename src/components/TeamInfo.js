
function TeamInfo(props) {
    console.log(props.finalTeam)

    return (
        <div className="teamInfo">
            <h2>{props.finalTeam.name}</h2>
            
            <h4>{props.finalTeam.abbreviation}</h4>
            <p>Location: {props.finalTeam.locationName}</p>
            <p>First Year: {props.finalTeam.firstYearOfPlay}</p>
            <p>Website: {props.finalTeam.officialSiteUrl}</p>
            <p>Conference: {props.finalTeam.conference.name}</p>
            
            
            
        </div>
    )
}

export default TeamInfo