
function TeamInfo(props) {
    return (
        <div>
            {
            !props.finalTeam.name ? <h2>Select a team!</h2> :

            <div className="teamInfo">

                <h2>{props.finalTeam.name}</h2>
            
                <h4>{props.finalTeam.abbreviation}</h4>
                <p>Location: {props.finalTeam.locationName}</p>
                <p>Conference: {props.finalTeam.conference.name}</p>
                <p>First Year: {props.finalTeam.firstYearOfPlay}</p>
                <p>Website: {props.finalTeam.officialSiteUrl}</p>
            
            
            
            </div>
            }
        </div>
    )
}

export default TeamInfo