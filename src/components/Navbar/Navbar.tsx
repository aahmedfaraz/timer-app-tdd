import React from 'react';
import { Typography, Icon } from '@mui/material';

const Navbar = () => {
    return (
        <nav data-testid="navbar">
            <Typography data-testid="nav-line" variant='h4'><Icon data-testid="nav-icon">timer</Icon> Timer App</Typography>
            <Typography data-testid="nav-line" variant='subtitle2'>using <strong>Test Driven Development</strong></Typography>
            <Typography data-testid="nav-line" variant='subtitle2'>by <strong>Ahmed Faraz</strong></Typography>
        </nav>
    )
}

export default Navbar;
