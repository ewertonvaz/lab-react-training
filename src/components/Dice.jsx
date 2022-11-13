import { useState } from "react";
import diceEmpty from '../assets/images/dice-empty.png';
import diceFace1 from '../assets/images/dice1.png';
import diceFace2 from '../assets/images/dice2.png';
import diceFace3 from '../assets/images/dice3.png';
import diceFace4 from '../assets/images/dice4.png';
import diceFace5 from '../assets/images/dice5.png';
import diceFace6 from '../assets/images/dice6.png';


function Dice() {
    const [diceNumber, setNumber] = useState(0);
    const faceImages = [ diceFace1, diceFace2, diceFace3, diceFace4, diceFace5, diceFace6 ]

    function generate(){
        setTimeout( ()=>  {
            setNumber( Math.floor(Math.random() * 6) + 1 );
        }, 1000)
    }

    function handleClick(e){
        e.preventDefault();
        if (diceNumber !== 0){
            setNumber(0)
        }
        generate();
    }

    return ( <div>
        <img 
            onClick={handleClick}
            src={diceNumber === 0 ? diceEmpty : faceImages[diceNumber-1]} alt="dice face"
            width="128px"
        />
    </div> );
}

export default Dice;