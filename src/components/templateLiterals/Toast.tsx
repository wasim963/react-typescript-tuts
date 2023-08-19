/**
 * Position Prop can be one of  
 * "left-top" | "left-center" | "left-bottom"
 * "center-top" | "center" | "center-bottom"
 * "right-top" | "right-center" | "right-bottom"
 */

type HorizontalPostions = 'left' | 'center' | 'right';
type VertcalPositions = 'top' | 'center' | 'bottom';

type ToastProps = {
    position: Exclude<`${HorizontalPostions}-${VertcalPositions}`, 'center-center'> | 'center'
}

export const Toast = ( { position }: ToastProps ) => {
  return (
      <div>Toast Notification Positon - { position } </div>
  )
}
