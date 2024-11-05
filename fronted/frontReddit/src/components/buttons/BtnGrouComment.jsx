import { Button, Box} from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DropMenu from "../drops/DropMenu";
import BtnUpDown from "./BtnUpDown";

const BtnGrouComment = () => {

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
				<Box sx={{marginRight: '4.3rem'}}>
					<Box sx={{height:'10px'}}> </Box>
						<BtnUpDown orientation="row" />
				</Box>
				<Button sx={buttonStyles}>
					<ChatBubbleOutlineOutlinedIcon />
					Reply
				</Button>
				<Button sx={buttonStyles}>
					Share
				</Button>
				<DropMenu />
			</Box>
		</Box>
  );
};

export default BtnGrouComment;
