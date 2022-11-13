import { useState } from "react";

function LikeButton() {
    const [likeCounter, setLikeCounter] = useState(0);
    const [colorIndex, setColorIndex]  = useState(0);
    const colors = ['purple','blue','green','yellow','orange','red'];

    function likeCounterHandler(e){
        e.preventDefault();
        // console.log(e.target);
        setLikeCounter( likeCounter + 1);
        colorIndex < colors.length - 1 ? setColorIndex(colorIndex + 1) : setColorIndex(0);
    }

    return ( <div>
        <button name="like-button" 
            onClick={likeCounterHandler}
            style={{
                backgroundColor: `${colors[colorIndex]}`,
                padding: '8px',
                color: 'white',
                border: 'none',
                fontSize: '1.2rem'
            }}
        >
            {likeCounter} Likes
        </button>
    </div> );
}

export default LikeButton;