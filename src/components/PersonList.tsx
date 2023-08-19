import React from 'react';
import { Name } from './Person.type';

// ProptType - an array of objects
type PersonsList = {
    names: Name[]
}

const PersonList = ( props: PersonsList ) => {
  return (
    <div>
        {
        props?.names?.map((name, index) => {
            return (
                <h2 key={index} >{name?.first} {name?.last } </h2>
            )
        } )
        }
    </div>
  )
}

export default PersonList