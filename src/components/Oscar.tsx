import React from 'react'

// prop: children of type ReactNode
type OscarProps = {
    children: React.ReactNode
}

const Oscar = ( props: OscarProps ) => {
  return (
    <div> { props?.children } </div>
  )
}

export default Oscar