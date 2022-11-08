function Greetings({lang, children}){
    let greetings = [
        { lang: "de", greeting: "Hallo"},
        { lang: "fr", greeting: "Bonjour"},
        { lang: "pt", greeting: "Olá"},
        { lang: "en", greeting: "Hello"},
    ]

    return (
        <div style={{
            display: "flex",
            border: "2px solid black",
            padding: "4px",
            fontSize: "2rem",
            margin: "8px",
            width: "40vw"
        }}>
            { greetings.filter( el => el.lang === lang )[0].greeting + " " + children}
        </div>
    );
}

export default Greetings;