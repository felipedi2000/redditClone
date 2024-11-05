import { Button, Box } from '@mui/material';

const BtnLink = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        position: 'relative',
        borderRadius: '10px',
        border: '2px solid #ff4800',
        '&:hover': {
          borderColor: '#f84802', // Color del contorno al pasar el mouse
        },
        width: '190px',
        height: '140px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centra el ícono
        }}
      >
        <i className="fi fi-br-link-alt"  style={{ fontSize: '25px', color: '#f84802'}}></i>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          top: '50%',
          transform: 'translate(360%, 65%)',
        }}
      >
        <i className="fi fi-ss-arrow-up-right-from-square" style={{ fontSize: '20px', color: '#f84802'}}></i>
      </Box>
    </Button>
  );
};

export default BtnLink;
