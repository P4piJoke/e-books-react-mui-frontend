import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{
                        flexGrow: 1
                    }}>
                        <Button component={Link} color='inherit' size='large' to="/">E-Books</Button>

                    </Typography>
                    <Button component={Link} variant='outlined' color="inherit" to="/addBook">Upload book</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}