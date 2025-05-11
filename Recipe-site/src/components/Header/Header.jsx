import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMenu, setCurrentMenu] = useState('');
    const [scrolling, setScrolling] = useState(false);

    const handleClick = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setCurrentMenu(menu);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentMenu('');
    };

    const menuItems = {
        'מאפים': ['עוגיות', 'עוגות'],
        'עוד': ['ללא גלוטן', 'ראשונות', 'עיקריות', 'תוספות', 'קינוחים'],
        'שבת וחג': ['שבת', 'ראש השנה', 'חנוכה', 'פורים', 'פסח', 'שבועות']
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolling ? 'rgba(155, 123, 61, 0.8)' : '#9b7b3d',
                marginTop: 0,
                marginBottom: 0,
                top: 0,
                transition: 'background-color 0.3s ease'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" sx={{ marginLeft: 2 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {['שבת וחג', 'עוד', 'מאפים', 'סלטים', 'בריא', 'מרקים', 'דגים', 'עוף', 'מרק'].map((text, index) => {
                        const isDropdown = menuItems[text] !== undefined;
                        return (
                            <div key={index}>
                                <Link
                                    href={isDropdown ? undefined : "#"}
                                    onClick={isDropdown ? (event) => handleClick(event, text) : undefined}
                                    sx={{
                                        marginLeft: 4,
                                        textDecoration: 'none',
                                        color: 'white',
                                        position: 'relative',
                                        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row-reverse',
                                        '&:hover': {
                                            color: 'white',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                left: '-8px',
                                                right: '-8px',
                                                bottom: '-8px',
                                                height: '2.5px',
                                                backgroundColor: 'white',
                                            }
                                        }
                                    }}
                                >
                                    {text}
                                    {isDropdown && <ArrowDropDownIcon sx={{ fontSize: '16px', marginLeft: 0.5 }} />}
                                </Link>

                                {isDropdown && (
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl) && currentMenu === text}
                                        onClose={handleClose}
                                    >
                                        {menuItems[text].map((item, itemIndex) => (
                                            <MenuItem key={itemIndex} onClick={handleClose} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                )}
                            </div>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
