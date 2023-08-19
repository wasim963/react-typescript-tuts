import { useState, useRef, useEffect } from 'react'

const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null)
    
    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval( intervalRef.current )
        }
    }
    
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer( timer => timer + 1 )
        }, 1000)
        
        return () => {
            stopTimer();
        }
    }, [] )
  return (
      <div>
          <h2>Timer - {timer}</h2>
          <button onClick={stopTimer} >Stop TImer</button>
    </div>
  )
}

export default MutableRef