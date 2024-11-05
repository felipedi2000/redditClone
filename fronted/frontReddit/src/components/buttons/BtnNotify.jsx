import { useState } from 'react';
import { IconButton, Box } from '@mui/material';
import './BtnNotify.css'

const BtnNotify = () => {
  const [actNoti, setactNoti] = useState(null);
  
  const clicked = () => {
    if (actNoti === 'act') {
      setactNoti(null);
    } else {
      setactNoti('act');
    }
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ width: 22, height: 22 }}>
      <IconButton onClick={clicked} 
        sx={{ 
          color: actNoti === 'act' ? '#f84802' : 'inherit' 
        }}
        >
        <Box sx={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<i className="fi fi-rs-bell .btn-notify"></i>
        </Box>
      </IconButton>
    </Box>
  );
};

export default BtnNotify;
