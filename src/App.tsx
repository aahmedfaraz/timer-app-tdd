import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
// MUI Components
import { Paper, Typography, Stack } from '@mui/material';
// React Components
import Navbar from './components/Navbar/Navbar';
import TimerButton from './components/TimerButton/TimerButton';

const App:React.FC = () => {

  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0
  });
  const [trigger, setTrigger] = useState(false); // New Learning 1

  let timeOut : any;

  useEffect(() => {
    if(trigger) {
      timeOut = setTimeout(() => {
        let { hour, min, sec } = time;
        sec++;
        if(sec === 60) {
          min++;
          sec = 0;
          if(min === 60){
            hour++;
            min = 0;
            if(hour === 100) {
              hour = 0;
              min = 0;
              sec = 0;
            }
          }
        }
        setTime({
          hour,
          min,
          sec
        })
      }, 1000);
    }
  }, [time, trigger])

  // Start
  const start = () => setTrigger(true);
  // Stop
  const stop = () => {
    clearTimeout(timeOut); // New Learning 2
    setTrigger(false)
  };
  // Reset
  const reset = () => {
    clearTimeout(timeOut); // New Learning 2
    setTime({
      hour: 0,
      min: 0,
      sec: 0
    });
  }

  // Value should have two digits
  const displayVal = (val:number) : string => {
    return (val).toString().match(/[0-9]{2}/) ? `${val}` : `0${val}`;
  }

  let { hour, min, sec } = time;

  return (
    <Fragment>
      <Navbar />
      <Paper data-testid="container" className="container" elevation={5} >
        <Typography data-testid="text" variant="h4" textAlign="center" color='primary' gutterBottom>{displayVal(hour)}:{displayVal(min)}:{displayVal(sec)}</Typography>
        <Stack direction={{xs:'column', sm:'row'}} spacing={1} justifyContent="center">
          <TimerButton icon="timer" text="start" callback={start} />
          <TimerButton icon="timer_off" text="stop" callback={stop} />
          <TimerButton icon="restart_alt" text="reset" callback={reset} />
        </Stack>
      </Paper>
    </Fragment>
  );
}

export default App;
