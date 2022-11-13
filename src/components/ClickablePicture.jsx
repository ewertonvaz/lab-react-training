import { useState } from "react";

function ClickablePicture({img, imgClicked}) {
    const [ clicked, setClicked ] = useState(false);

    function handleClick(e){
        e.preventDefault();
        setClicked(!clicked);
    }

    return ( <div>
        <img onClick={handleClick} src={clicked ? imgClicked : img} alt="" width="120px" />
    </div> );
}

export default ClickablePicture;