import React from 'react';

const PlayArea = (props:Moves) =>{
  
    const Lo = props.loading ? "3 2 1..." : (props.move +' vs ' +props.house)
    return (
        <div >{props.round === 0? "Let's Start" : Lo } </div>)
}

interface Moves{
    move: string;
    house: string,
    loading:boolean,
    round:number
}

export default PlayArea