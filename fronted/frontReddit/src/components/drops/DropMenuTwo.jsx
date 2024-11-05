import { MenuItem, FormControl, Select, Box, Typography } from '@mui/material';
import { useState } from 'react';

const DropMenuTwo = () => {
  const stylesOptions = {
    fontSize: '12px', 
    color: '#ff4800',
  };

  const [option, setOption] = useState(1); // Valor inicial como número

  const onSelectOption = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <Typography sx={{
        fontSize: '12px',
        color: '#ff4800',
        fontWeight: 'bold',
        marginRight: '0px'
      }}>
        Sorted By:
      </Typography>
      <FormControl sx={{ 
        marginRight: '0px', 
        minWidth: '50px',
        display: 'flex', 
        height: '36px'
      }}>
        <Select
          id="custom-select"
          sx={{
            border: 'none',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            minWidth: '30px',
            marginTop: '5%',
            '& .MuiSelect-select': {
              fontSize: '12px',
              color: '#ff4800',
              border: 'none',
              fontWeight: 'bold',
              padding: '4px',
              '&:focus': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            },
            '& fieldset': {
              display: 'none',
            },
          }}
          onChange={onSelectOption}
          value={option}
        >
          <MenuItem value={1} sx={stylesOptions}>Old</MenuItem>
          <MenuItem value={2} sx={stylesOptions}>New</MenuItem>
          <MenuItem value={3} sx={stylesOptions}>Popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropMenuTwo;
