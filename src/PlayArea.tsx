import React, { useEffect, useState } from 'react';

const PlayArea = (props:Moves) =>{

    return (
    <div >{props.loading ? "" : (props.move +' vs ' +props.house)} </div>)
}

interface Moves{
    move: string;
    house: string,
    loading:boolean
}

export default PlayArea