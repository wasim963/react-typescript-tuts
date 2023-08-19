import React from 'react';

type ContainerProps = {
    style: React.CSSProperties
}

const Container = ( props: ContainerProps ) => {
  return (
    <div style={props?.style} >
        Text Content Goes Here
    </div>
  )
}

export default Container