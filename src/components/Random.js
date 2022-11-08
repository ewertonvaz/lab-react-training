function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function Random({min, max}) {
    return(
        <div style={{
            display: "flex",
            border: "2px solid black",
            padding: "4px",
            margin: "8px",
            fontSize: "2rem",
            width: "40vw"
        }}>
            Random value between {min} and {max} => { getRandomIntInclusive(min, max) }    
        </div>
    );
}

export default Random;