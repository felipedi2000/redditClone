import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const TextUser = ({ user, time }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: 'bold'
      }}
      color="text.primary">
        {user}
      </Typography>
      <Typography sx={{
        mx: 0.5,
        fontSize: '14px'
      }}
      color="text.secondary">
        • {time}
      </Typography>
    </Box>
  );
};

TextUser.propTypes = {
  user: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default TextUser;


