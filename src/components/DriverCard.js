import Rating from "./Rating";
function DriverCard({name, rating, img, car}){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
            backgroundColor: "#455eb5",
            margin: "16px",
            padding: "32px",
            borderRadius: "12px"
        }}>
            <img src={img} alt="driver's face" style={{width:"240px", height: "240px", borderRadius: "50%", objectFit: "cover"}}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft:"16px"}}>
                <h1>{name}</h1>
                <Rating>{rating}</Rating> 
                <h2 style={{fontWeight: "normal"}}> {car.model} - {car.licensePlate}</h2>
            </div>
        </div>
    );
}

export default DriverCard;