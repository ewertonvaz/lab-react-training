import visaImg from "../assets/images/visa.png";
import masterImg from "../assets/images/mastercard-logo-6.png";

function numberFormat(cardnumber){
    return '**** **** **** ' + cardnumber.substr(cardnumber.length - 4, 4);
}

function CreditCard({
    type, number, expirationMonth, expirationYear, bank, owner, bgColor, color
}){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: `${bgColor}`,
            borderRadius: "5px",
            margin: "8px",
            width: "20vw",
            padding: "16px",
            color: `${bgColor === '#eeeeee' ? 'black' : 'white'}`
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <img src={ type === "Visa" ? visaImg : masterImg} alt="tipo cartão" style={{width: "48px"}}/>
            </div>
            <div style={{
                fontSize: "2.5rem",
                marginTop: "16px",
                marginBottom: "16px"
            }}>{numberFormat(number)}</div>
            <div style={{
                textAlign: "left"
            }}>
                Expires {expirationMonth}/{expirationYear} {bank}<br/>
                {owner}
            </div>
        </div>
    );
}

export default CreditCard;