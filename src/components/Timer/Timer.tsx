import React , { useState } from 'react'

const Timer = () => {
    const [state, setState] = useState({
        minutes: 25,
        seconds: 0,
        isOn: false
    })

    const startTimer = () => {console.log('Start Timer')};
    const stopTimer = () => {console.log('Stop Timer')};
    const resetTimer = () => {console.log('Reset Timer')};

    return (
        <div>
            <h2>Timer</h2>
        </div>
    )
}

export default Timer;
