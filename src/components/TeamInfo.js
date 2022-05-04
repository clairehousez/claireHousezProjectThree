
function TeamInfo(props) {
    return (
        <div>
            {
            !props.finalTeam.name ? <h2>Select your favourite team!</h2> :

            <div className="teamInfo">

                <h3>{props.finalTeam.name}</h3>
            
                <h4>{props.finalTeam.abbreviation}</h4>
                <p>Location: {props.finalTeam.locationName}</p>
                <p>Conference: {props.finalTeam.conference.name}</p>
                <p>First Year: {props.finalTeam.firstYearOfPlay}</p>
                <p>Website: <a href="{props.finalTeam.officialSiteUrl}">{props.finalTeam.officialSiteUrl}</a></p>
            
            </div>
            }
        </div>
    )
}

export default TeamInfo