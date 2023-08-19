import React from 'react';

// Proptypes - event : MouseEvent
type ButtonProps = {
    handleClick: ( event: React.MouseEvent<HTMLButtonElement>, id: number ) => void
}

const Button = ( props: ButtonProps ) => {
  return (
    <button onClick={ ( event ) => props?.handleClick( event, 1 )} >Click</button>
  )
}

export default Button