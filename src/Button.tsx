import React from "react";

type ButtonProps = {
    value: string
    res?: string | number
    onClick: (value: string) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <div onClick={() => props.onClick(props.value)} className='button'>
            {props.value}
        </div>
    )
}