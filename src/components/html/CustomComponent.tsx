import React from 'react';
import Greet from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
      <div>
            {props?.isLoggedIn ?
            <>
                <div>{ props.name }</div>
                <div>{props.messageCount}</div>
            </> : 'Please Login'
          }
    </div>
  )
}
