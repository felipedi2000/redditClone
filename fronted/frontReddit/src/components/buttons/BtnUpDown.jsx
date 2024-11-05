import PropTypes from 'prop-types';
import { useState} from 'react';
import { IconButton, Typography, Box} from '@mui/material';
import './BtnUpDown.css'

const BtnUpDown = ({orientation}) => {
  const [userVote, setUserVote] = useState(null);
  const [likes, setLikes] = useState(123)

  const handleUpvote = () => {
    if (userVote === 'up') {
      setLikes((val) => val - 1);
      setUserVote(null);
    } else {
      if (userVote === 'down') {
        setLikes((val) => val + 1);
      }
      setUserVote('up');
      setLikes((val) => val + 1);
    }
  };
  
  const handleDownvote = () => {
    if (userVote === 'down') {
      setLikes((val) => val + 1);
      setUserVote(null);
    } else {
      if (userVote === 'up') {
        setLikes((val) => val - 1);
      }
      setUserVote('down');
      setLikes((val) => val - 1);
    }
  };


  return (
    <Box display="flex" flexDirection={orientation} alignItems="center" sx={{ width: 20, height: 15 }}>
      <IconButton onClick={handleUpvote} 
        sx={{ 
          color: userVote === 'up' ? '#f84802' : 'inherit' 
        }}
      >
        <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fi fi-ts-up btn-up-down"></i>
        </Box>
      </IconButton>
      <Typography variant="h8">{likes}</Typography>
      <IconButton onClick={handleDownvote}
        sx={{ 
          color: userVote === 'down' ? '#f84802' : 'inherit' 
        }}
      >
        <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fi fi-ts-down btn-up-down" ></i>
        </Box>
      </IconButton>
    </Box>
  );
};


BtnUpDown.propTypes = {
  orientation: PropTypes.string.isRequired,
};

export default BtnUpDown;
