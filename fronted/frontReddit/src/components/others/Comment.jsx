import PropTypes from "prop-types";
import TextUser from "./TextUser";
import { Box, Avatar } from "@mui/material";
import BtnGrouComment from "../buttons/BtnGrouComment";


const Comment = ({icon, user, time, text}) => {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '5% 1fr',
      gap: 1.2,
      width: '100%',
    }}
  >
    <Box sx={{ bgcolor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Avatar sx={{
        width: '40px',
        height: '40px',
      }}>{icon}
      </Avatar>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <TextUser user={user} time={time}/>
    </Box>
    <Box sx={{  height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', fontSize: '14px', marginTop: '-7%' }}>
      <Box sx={{ marginTop: 5.5, textAlign: 'left', width: '100%', wordWrap: 'break-word' }}>
        {text}
      </Box>
      <Box sx={{ paddingTop: 2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Box>
            <BtnGrouComment />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  );
}


Comment.propTypes = {
  icon: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Comment;
