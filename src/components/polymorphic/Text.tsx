import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    tagName?: E
} 

// TextProps contains all the props of its Textown props and also the React ComponentProps of a specif html
// element type like(htmlFor for lable)
// Omit removes the props which can collide with the React ComponentProps
type TextProps<E extends React.ElementType> =
    TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
    
// by default typeof tagName will be typeof 'div' if tagName is not passed.
export const Text = <E extends React.ElementType = 'div'>({ size, color, children, tagName }: TextProps<E>) => {
    
    // by default tagName will be 'div if tagName is not passed.
    const Component = tagName || 'div';
    
  return (
    <Component className={`class-with-${size}-${color}`} >
        { children }
    </Component>
  )
}
