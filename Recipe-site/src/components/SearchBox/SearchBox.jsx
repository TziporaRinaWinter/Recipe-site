import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
        setQuery(''); // לנקות את השדה לאחר החיפוש
    };

    return (
        <TextField
            variant="outlined"
            placeholder="?מה תרצו להכין"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            size="small"
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                style: { textAlign: 'left' } // מיקום הטקסט לימין
            }}
            style={{ 
                width: isHovered ? '520px' : '300px', // שינוי רוחב על פי מצב העכבר
                transition: 'width 0.3s ease' // אנימציה חלקה
            }}
            onMouseEnter={() => setIsHovered(true)} // כאשר העכבר נכנס
            onMouseLeave={() => setIsHovered(false)} // כאשר העכבר יוצא
        />
    );
};

export default SearchBox;
