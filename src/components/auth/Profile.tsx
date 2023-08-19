import React from 'react';

export type ProfileProps = {
    name: string
}

export const Profile = ( { name }: ProfileProps ) => {
  return (
      <div>Private Profile Content, Tha Name is { name } </div>
  )
}