import React, { useEffect, useState } from 'react';

const PlayArea = (props:Moves) =>{

    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
        return (()=>{setLoading(true)})
    },[props.move])

    return (
    <div >{loading ?"3 2 1 ...": props.move}</div>)
}

interface Moves{
    move: string;
}

export default PlayArea