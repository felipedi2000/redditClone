import { useState } from 'react';
import { MenuItem, Button, Menu } from '@mui/material';

const DropMenu = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        variant="contained" 
        onClick={handleClick}
        aria-controls="simple-menu" 
        aria-haspopup="true"
        sx={{
          bgcolor: '#ffffff',
          color: 'black',
          opacity: '0.6',
          padding: '5px',
          gap: '2px',
          fontSize: '12px',
          border: 'none',
          boxShadow: 'none',
          width: '30px',
          height: '30px',
          '&:hover': {
            backgroundColor: '#ffffff',
            boxShadow: 'none'
          },
        }}
      >
        •••
      </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Op1</MenuItem>
        <MenuItem onClick={handleClose}>Op2</MenuItem>
        <MenuItem onClick={handleClose}>Op3</MenuItem>
      </Menu>
    </div>
  );
};

export default DropMenu;
