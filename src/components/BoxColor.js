function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor({r, g, b}){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            border: "2px solid black",
            padding: "32px",
            margin: "8px",
            fontSize: "2rem",
            width: "40vw",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            color: `${r === 255 ? 'white' : 'black'}`
        }}>
            rgb {`(${r}, ${g}, ${b})`} <br/>
            { rgbToHex(r, g, b) }
        </div>
    );
}

export default BoxColor;