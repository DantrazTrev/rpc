import React from 'react';

const Controls = (props:Control) =>{

    const buttons =["Rock","Paper","Scissors"]

    return (<div className="btns">
       { buttons.map((btn)=>{
            return(<button onClick={(e)=>{props.setMove(btn)}} className="btn">{btn}</button>)
        })}
        </div>
    )
}
interface Control{
    setMove: any;
}


export default Controls