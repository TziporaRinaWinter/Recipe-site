import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search'; // זכוכית מגדלת
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton'; // שימוש ב-IconButton

const Header = () => {
    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                backgroundColor: '#c2b2a0', 
                marginTop: 0, 
                marginBottom: 0, 
                top: 0 
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton color="inherit" sx={{ marginLeft: 2 }}>
                    <SearchIcon /> {/* זכוכית מגדלת */}
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {['שבת וחג', 'עוד', 'מאפים', 'סלטים', 'בריא', 'מרקים', 'דגים', 'עוף', 'מרק'].map((text, index) => (
                        <Link 
                            key={index} 
                            href="#" 
                            sx={{ 
                                marginLeft: 2, 
                                textDecoration: 'none', 
                                color: 'white', // שינוי צבע הטקסט ללבן
                                '&:hover': { 
                                    textDecoration: 'underline' 
                                } 
                            }}
                        >
                            {text}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
