import React from 'react';
const Heading = (props:IProps) =>{

    return (<><h1 className="heading">ROCK PAPER SCISSOR </h1>
            <h3>Score: {props.score}</h3></>
        )
}


interface IProps{
    score:number,
    loading:boolean
}
export default Heading