import React , { createContext, useState } from 'react';


interface DualImageColor{
    primary:string,
    secondary:string
}

interface ContextProps{
    color:DualImageColor
    prevcolor:DualImageColor
    setMainColor: (color: DualImageColor) => void
    setMainPrevColor: (color: DualImageColor) => void
}


export const GradientContex= createContext({} as ContextProps ) // TODO: definir tipo


export const GradtientProvider=({children}:any)=>{
    const[color, setColor]=useState<DualImageColor>({
        primary:'transparent',
        secondary:'transparent'
    })

    const[prevcolor, setPrevColor]=useState<DualImageColor>({
        primary:'transparent',
        secondary:'transparent'
    })
    const setMainColor=(color: DualImageColor)=>{
        setColor(color)
    }

    const setMainPrevColor=(color: DualImageColor)=>{
        setPrevColor(color)
    }
    return(
        <GradientContex.Provider value={{
            color,
            prevcolor,
            setMainColor,
            setMainPrevColor
        }}>

            {children}
        </GradientContex.Provider>
    )
}