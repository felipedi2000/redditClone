import { Box, TextField, Button, Typography } from "@mui/material";
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import ReportIcon from '@mui/icons-material/Report';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useState } from "react";

const InpReply = () => {
  const buttonStyles = {
    bgcolor: 'none',
    color: 'black',
    opacity: '0.6',
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    minWidth: '44px',
    borderRadius: '5px',
    margin: 0,
    padding: 0.5,
  };

  const specialButtonStyles = {
    color: '#ff4800',
    bgcolor: 'rgba(240, 240, 240, 0.8)',
    height: '30px',
    minWidth: '30px',
    borderRadius: '5px',
    margin: 0,
    padding: '0 4px',
    fontWeight: 'bold',
    marginLeft: '1.5%',
    marginRight: '10px',
    fontSize: '9px',
    '&:hover': {
      bgcolor: 'rgba(240, 240, 240, 0.8)',
    }
  };

  const specialIconsStyles = {
      fontSize: '16px',
      marginTop: '6%',
  };



  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };


  return (
    <Box
      sx={{
        border: '1.8px solid rgba(240, 240, 240, 0.8)',
        borderBottom: 'none',
        width: '95%',
        height: '100%',
        borderRadius: '10px',
      }}
    >
      <Box>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          placeholder="What are your thoughts?"
          value={text}
          onChange={handleChange}
          sx={{
            '&::placeholder': {
              color: '#999',
              opacity: 1,
              fontSize: '12px',
            },
            '& fieldset': {
              border: 'none',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            },
            '& input': {
              fontSize: '10px',
            },
            width: '100%',
            borderBottom: 'none',
          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box
          sx={{
            fontFamily: 'Roboto',
            fontSize: '11px',
            display: 'flex',
            bgcolor: 'rgba(240, 240, 240, 0.8)',
            border: '1.8px solid rgba(240, 240, 240, 0.8)',
            width: '100%',
            flexWrap: 'nowrap',
          }}
        >
          <Button sx={buttonStyles}>
            <FormatBoldOutlinedIcon />
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-br-information" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-br-link-alt" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-br-link-slash-alt" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-rr-circle-c" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-br-a" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <ReportIcon />
          </Button>
          <Button sx={buttonStyles}>
            <i className="fi fi-br-t" style={specialIconsStyles}></i>
          </Button>
          <Button sx={buttonStyles}>
            <FormatListBulletedIcon />
          </Button>
          <Button sx={buttonStyles}>
            <FormatListNumberedIcon />
          </Button>
          <Button sx={buttonStyles}>
            <Typography>
              •••
            </Typography>
          </Button>
          <Button sx={specialButtonStyles}>
            Mark Down Mode
          </Button>
          <Button sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            color: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '30px',
            marginTop: '0.3%',
            marginBottom: '0.1%',
            height: '5%',
            width: '18%',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.8)',
            },
            fontSize: '9px'
          }}
          disabled={!text}  >
            Comment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InpReply;
