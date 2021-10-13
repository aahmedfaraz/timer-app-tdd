import React from 'react';
import { Button, Icon} from '@mui/material';

type pageProps = {
    icon: string,
    text: string,
    callback: any
}

const TimerButton:React.FC<pageProps> = ({icon, text, callback}) => {
    return (
        <Button variant="contained" size="large" color="primary" data-testid="button" onClick={callback} ><Icon data-testid="icon">{icon}</Icon> {text}</Button>
    )
}

export default TimerButton;
