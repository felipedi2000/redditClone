import { Button, Box, Avatar, Typography } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import DropMenu from "../drops/DropMenu";
import image from './rIcon.jpg'

const BtnGrouPost = () => {

  const buttonStyles = {
    bgcolor: '#ffffff',
    color: 'black',
    opacity: '0.6',
    padding: '5px',
    gap: '2px',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
		<Box sx={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '95%',
		}}>
			<Box
			sx={{
				fontFamily: 'Roboto',
				fontSize: '11px',
				gap: '7px',
				display: 'flex',
			}}>
				<Button sx={buttonStyles}>
					<ChatBubbleOutlineOutlinedIcon />
					103 Comments
				</Button>
				<Button sx={buttonStyles}>
					<ShortcutOutlinedIcon />
					Share
				</Button>
				<Button sx={buttonStyles}>
					<TurnedInNotOutlinedIcon />
					Save
				</Button>
				<DropMenu />
			</Box>
			<Box sx={{
					display: 'flex',
					alignItems: "center",
					justifyContent: 'center',
				}}>
					<Typography sx={{ opacity: '0.6',fontSize: '12.5px' }}>
        		11 people here
      		</Typography>
					<Avatar alt="Remy Sharp" src={image} sx={{marginLeft: '10px'}}/>
			</Box>
		</Box>
  );
};

export default BtnGrouPost;



