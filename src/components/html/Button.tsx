import React from "react"


// type ButtonProps = {
//     variant: 'primary' | 'secondary',
// } & React.ComponentProps<'button'>

type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string // if you want childrent to be only of type string
} & Omit<React.ComponentProps<'button'>, 'children'> // then omit type children from React.ComponentProps<'button'>



export const CustomButton = ({ variant, children, ...restProps }: ButtonProps) => {
    return (
        <button className={ `class-with-${variant}` } {...restProps} >{ children }</button>
  )
}
