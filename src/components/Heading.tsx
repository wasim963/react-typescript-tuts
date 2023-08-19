import React from 'react';

// prop: children of type String
type HeadingProps = {
    children: string
}

const Heading = ( props: HeadingProps ) => {
  return (
    <h2> { props?.children } </h2>
  )
}

export default Heading