function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}){
    return(
        <div style={{
            display: "flex",
            border: "1px solid black",
            padding: "4px",
            margin: "8px",
            width: "50vw"
        }}>
            <img src={picture} alt="user profile" style={{
                width: "180px",
                marginRight: "4px"
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
            }}>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default IdCard;