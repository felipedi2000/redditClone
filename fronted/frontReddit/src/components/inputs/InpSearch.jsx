import { TextField, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const InpSearch = () => {
  return (
    <Box sx={{ 
      borderRadius: '10px',
      height: '40px',
      border: '1.5px solid rgba(240, 240, 240, 0.8)',
      display: 'flex', // Asegúrate de que el contenedor sea un flex
      alignItems: 'center', // Centra verticalmente los elementos
      '& > :not(style)': { margin: 0.2 } 
    }}>
      <SearchIcon sx={{ 
        color: 'action.active', 
        mr: 1, 
        cursor: 'pointer',
        borderRadius: '50%',
        '&:hover': {
          backgroundColor: 'rgba(240, 240, 240, 0.8)',
          transition: 'background-color 0.2s ease',
        },
        '&:active': {
          backgroundColor: 'rgba(240, 240, 240, 0)', // Cambiado a 0 para mantener la transparencia
          transition: 'background-color 0.2s ease',
        },
      }}/>
      <TextField
        id="input-with-sx"
        placeholder="Search comments..."
        variant="standard"
        sx={{
          fontSize: '12px',
          height: '40px',
          width: '80%',
          '& .MuiInputBase-root': {
            '&:hover': {
              '& .MuiInputBase-input': {
                borderColor: 'transparent',
              },
            },
            '&:focus': {
              '& .MuiInputBase-input': {
                borderColor: 'transparent',
                boxShadow: 'none',
              },
            },
          },
          '& .MuiInputBase-input': {
            border: 'none',
            height: '100%',
						marginTop: '5px',
            fontSize: '12px',
            '&:hover, &:focus': {
              outline: 'none',
            },
          },
        }}
      />
    </Box>
  );
};

export default InpSearch;

